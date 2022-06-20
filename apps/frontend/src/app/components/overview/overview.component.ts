import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { MistoUlozeni, VzorekDto, Vzorky } from '../../api/backend-api/models';
import { BackendApiApiService } from '../../api/backend-api/services';
import { ConfirmService } from '../../services/confirm.service';
import { VzorekModalResult, VzorekModalComponent } from '../vzorek-modal/vzorek-modal.component';

@Component({
  selector: 'frontend-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  vzorky: VzorekDto[] = []
  mistaUlozeni: MistoUlozeni[] = []

  constructor(
    private api: BackendApiApiService,
    private modalService: NgbModal,
    private confirmService: ConfirmService) {
  }

  ngOnInit(): void {
    this.loadVzorky()
    this.loadMistaUlozeni()
  }

  onCreate() {
    this.createOrUpdate()
  }

  onEdit(vzorek: Vzorky) {
    this.createOrUpdate(vzorek)
  }

  onDelete(id: number) {
    this.confirmService.showModal(
      () => this.api.vzorekControllerDeleteVzorek({ id }).pipe(
        take(1),
      ).subscribe(
        () => this.loadVzorky()
      ),
      "Opravdu smazat?"
    )
  }

  getAdresa(id: number): string | undefined {
    return this.mistaUlozeni.find(a => a.id === id)?.adresa
  }

  private createOrUpdate(vzorek?: Vzorky) {
    const modalRef = this.modalService.open(VzorekModalComponent, {
      size: "lg",
      backdrop: "static"
    })
    modalRef.dismissed.pipe(
      take(1)
    ).subscribe(
      (res: VzorekModalResult) => {
        if (res.save) this.loadVzorky()
      }
    )
    modalRef.componentInstance.mistaUlozeni = this.mistaUlozeni
    if (vzorek) modalRef.componentInstance.vzorek = vzorek
  }

  private loadVzorky() {
    this.api.vzorekControllerGetVzorky().pipe(
      take(1)
    ).subscribe(
      (vzorky) => this.vzorky = vzorky
    )
  }

  private loadMistaUlozeni() {
    this.api.lokaceControllerGetLokace().pipe(
      take(1)
    ).subscribe(
      (mistaUlozeni) => this.mistaUlozeni = mistaUlozeni
    )
  }

}
