import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { BackendApiApiService } from '../../api/backend-api/services';
import { ConfirmService } from '../../services/confirm.service';
import { CreateVzorekModalComponent } from '../create-vzorek-modal/create-vzorek-modal.component';

@Component({
  selector: 'frontend-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  readonly vzorky$

  constructor(
    public api: BackendApiApiService,
    private modalService: NgbModal,
    private confirmService: ConfirmService) {
    this.vzorky$ = this.api.datasourceControllerGetVzorky()
  }

  ngOnInit(): void { }

  delete(id: number) {
    this.confirmService.showModal(
      () => this.api.datasourceControllerDeleteVzorek({ id }).pipe(
        take(1)
      ).subscribe()
    )
  }

  onCreate() {
    this.modalService.open(CreateVzorekModalComponent, {
      size: "lg",
      backdrop: "static"
    })
  }

}
