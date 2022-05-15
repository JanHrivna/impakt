import { Component, OnInit } from '@angular/core';
import { BackendApiApiService } from '../../api/backend-api/services';

@Component({
  selector: 'frontend-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  readonly vzorky$

  constructor(api: BackendApiApiService) {
    this.vzorky$ = api.datasourceControllerGetVzorky()
  }

  ngOnInit(): void { }

}
