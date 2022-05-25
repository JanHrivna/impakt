import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { Vzorky } from '../../api/backend-api/models';
import { BackendApiApiService } from '../../api/backend-api/services';
import { ConfirmService } from '../../services/confirm.service';
import { CreateVzorekModalComponent, CreateVzorekModalResult } from '../create-vzorek-modal/create-vzorek-modal.component';

@Component({
  selector: 'frontend-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  vzorky: Vzorky[] = []

  constructor(
    private api: BackendApiApiService,
    private modalService: NgbModal,
    private confirmService: ConfirmService) {
  }

  ngOnInit(): void {
    this.loadVzorky()
  }

  onCreate() {
    this.createOrUpdate()
  }

  onEdit(vzorek: Vzorky) {
    this.createOrUpdate(vzorek)
  }

  onDelete(id: number) {
    this.confirmService.showModal(
      () => this.api.datasourceControllerDeleteVzorek({ id }).pipe(
        take(1),
      ).subscribe(
        () => this.loadVzorky()
      ),
      "Opravdu smazat?"
    )
  }

  private createOrUpdate(vzorek?: Vzorky) {
    const modalRef = this.modalService.open(CreateVzorekModalComponent, {
      size: "lg",
      backdrop: "static"
    })
    modalRef.dismissed.pipe(
      take(1)
    ).subscribe(
      (res: CreateVzorekModalResult) => {
        if (res.save) this.loadVzorky()
      }
    )
    if (vzorek) modalRef.componentInstance.vzorek = vzorek
  }

  private loadVzorky() {
    return this.api.datasourceControllerGetVzorky().pipe(
      take(1)
    ).subscribe(
      (vzorky) => this.vzorky = vzorky
    )
  }

}
