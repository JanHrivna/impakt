import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CreateVzorekFormEnum } from './create-vzorek-modal-form.enum';
import { CreateVzorekModalService } from './services/create-vzorek-modal.service';
import { CustomDateParserFormatterService } from './services/custom-data-parser-formatter.service';
import { CustomDateAdapterService } from './services/custom-date-adapter.service';

@Component({
  selector: 'frontend-create-vzorek-modal',
  templateUrl: './create-vzorek-modal.component.html',
  styleUrls: ['./create-vzorek-modal.component.scss'],
  providers: [CreateVzorekModalService,
    { provide: NgbDateAdapter, useClass: CustomDateAdapterService },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatterService }
  ]
})
export class CreateVzorekModalComponent implements OnInit {

  readonly form: FormGroup = this.createVzorekModalService.initForm()
  readonly FormNames = CreateVzorekFormEnum

  constructor(
    public modal: NgbActiveModal,
    private createVzorekModalService: CreateVzorekModalService,
    private dateAdapter: NgbDateAdapter<string>) {
  }

  onSave() {
    this.modal.close()
    console.log("form submit", this.form.getRawValue())
  }

  ngOnInit(): void { }

}
