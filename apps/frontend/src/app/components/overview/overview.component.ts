import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, map, Observable, switchMap, take, tap } from 'rxjs';
import { MistoUlozeni, TypyAnalyz, VzorekDto } from '../../api/backend-api/models';
import { BackendApiApiService } from '../../api/backend-api/services';
import { ConfirmService } from '../../services/confirm.service';
import { selectVzorkyFilterDruh } from '../../store/vzorky';
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

  page = 1
  pageSize = 30
  vzorkyCnt: number = 0

  constructor(
    private api: BackendApiApiService,
    private modalService: NgbModal,
    private confirmService: ConfirmService,
    private store: Store) {
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
    modalRef.componentInstance.mistaUlozeni = this.mistaUlozeni.map(m => m.adresa)
    modalRef.componentInstance.typyAnalyz = this.typyAnalyz
    if (vzorekDto) {
      modalRef.componentInstance.vzorekDto = vzorekDto
    }
  }

  private getVzorky$() {

    return combineLatest({
      vzorky: this.vzorkySubject.pipe(switchMap(() => this.api.vzorekControllerGetVzorky())),
      mistaUlozeni: this.api.lokaceControllerGetLokace(),
      typyAnalyz: this.api.analyzaControllerGetTypyAnalyz(),
      filter: this.store.select(selectVzorkyFilterDruh as any) as Observable<string>
    }).pipe(
      map(
        (res) => {
          this.typyAnalyz = res.typyAnalyz.sort((a, b) => a.id - b.id)
          this.mistaUlozeni = res.mistaUlozeni
          const vzorkyFiltered = res.filter ? res.vzorky.filter(v => v.vzorek.druh.toLocaleLowerCase().includes(res.filter.toLocaleLowerCase())) : res.vzorky
          const result = vzorkyFiltered.map(v => (
            {
              ...v,
              vzorek: {
                ...v.vzorek
              },
              analyzy: this.typyAnalyz.map(t => ({
                kod: t.kod,
                id_typ: t.id,
                ...v.analyzy.find(a => t.id === a.id_typ)
              }))
            }))
          return result
        }
      ),
      tap(
        (res) => this.vzorkyCnt = res.length
      )
    )
  }

}
