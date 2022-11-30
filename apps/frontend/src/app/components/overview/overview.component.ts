import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, combineLatest, map, switchMap, take } from 'rxjs';
import { MistoUlozeni, TypyAnalyz, VzorekDto } from '../../api/backend-api/models';
import { BackendApiApiService } from '../../api/backend-api/services';
import { ConfirmService } from '../../services/confirm.service';
import { VzorekModalComponent, VzorekModalResult } from '../vzorek-modal/vzorek-modal.component';

@Component({
  selector: 'frontend-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  readonly vzorkySubject = new BehaviorSubject(null)
  readonly vzorky$ = this.getVzorky$()

  mistaUlozeni: MistoUlozeni[] = []
  typyAnalyz: TypyAnalyz[] = []

  constructor(
    private api: BackendApiApiService,
    private modalService: NgbModal,
    private confirmService: ConfirmService) {
  }

  ngOnInit(): void {
  }

  onCreate() {
    this.openCreateOrUpdateModal()
  }

  onEdit(vzorek: any) {
    this.openCreateOrUpdateModal(vzorek)
  }

  onDelete(id: number) {
    this.confirmService.showModal(
      () => this.api.vzorekControllerDeleteVzorek({ id }).pipe(
        take(1),
      ).subscribe(
        () => this.vzorkySubject.next(null)
      ),
      "Opravdu smazat?"
    )
  }

  private openCreateOrUpdateModal(vzorekDto?: VzorekDto) {
    const modalRef = this.modalService.open(VzorekModalComponent, {
      backdrop: "static",
      scrollable: true,
      fullscreen: true
    })
    modalRef.dismissed.pipe(
      take(1)
    ).subscribe(
      (res: VzorekModalResult) => {
        if (res.save) this.vzorkySubject.next(null)
      }
    )
    modalRef.componentInstance.mistaUlozeni = this.mistaUlozeni
    modalRef.componentInstance.typyAnalyz = this.typyAnalyz
    if (vzorekDto) {
      modalRef.componentInstance.vzorekDto = vzorekDto
    }
  }

  private getVzorky$() {
    const getAdresa = (id: number) => this.mistaUlozeni.find(a => a.id === id)?.adresa

    return combineLatest({
      vzorky: this.vzorkySubject.pipe(switchMap(() => this.api.vzorekControllerGetVzorky())),
      mistaUlozeni: this.api.lokaceControllerGetLokace(),
      typyAnalyz: this.api.analyzaControllerGetTypyAnalyz()
    }).pipe(
      map(
        (res) => {
          this.typyAnalyz = res.typyAnalyz.sort((a, b) => a.id - b.id)
          this.mistaUlozeni = res.mistaUlozeni
          const result = res.vzorky.map(v => (
            {
              ...v,
              vzorek: {
                ...v.vzorek,
                ulozeni_svlecky_misto: getAdresa(v.vzorek.ulozeni_svlecky_misto),
                priprava_vzorku_misto: getAdresa(v.vzorek.priprava_vzorku_misto),
                ulozeni_vzorku_do_analyzy_misto: getAdresa(v.vzorek.ulozeni_vzorku_do_analyzy_misto),
                ulozeni_vzorku_aktualni: getAdresa(v.vzorek.ulozeni_vzorku_aktualni)
              },
              analyzy: this.typyAnalyz.map(t => ({
                kod: t.kod,
                id_typ: t.id,
                ...v.analyzy.find(a => t.id === a.id_typ)
              }))
            }))
          return result
        }
      )
    )
  }

}
