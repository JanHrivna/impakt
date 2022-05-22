import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendApiApiService } from '../../api/backend-api/services';
import { CreateVzorekModalComponent } from '../create-vzorek-modal/create-vzorek-modal.component';

@Component({
  selector: 'frontend-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  readonly vzorky$

  constructor(
    api: BackendApiApiService,
    private modalService: NgbModal) {
    this.vzorky$ = api.datasourceControllerGetVzorky()
  }

  ngOnInit(): void { }

  delete() {

  }

  onCreate() {
    this.modalService.open(CreateVzorekModalComponent, {
      size: "lg"
    })
  }

}
