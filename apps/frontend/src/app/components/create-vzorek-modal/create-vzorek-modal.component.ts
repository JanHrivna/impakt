import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { MistoUlozeni } from '../../api/backend-api/models/misto-ulozeni';
import { BackendApiApiService } from '../../api/backend-api/services';
import { CreateVzorekFormEnum } from './create-vzorek-modal-form.enum';
import { CreateVzorekModalService } from './services/create-vzorek-modal.service';
import { CustomDateAdapterService } from './services/custom-date-adapter.service';
import { CustomDateParserFormatterService } from './services/custom-date-parser-formatter.service';
import { CustomDatepickerI18n, I18n } from './services/custom-datepicker-i18n.service';


@Component({
  selector: 'frontend-create-vzorek-modal',
  templateUrl: './create-vzorek-modal.component.html',
  styleUrls: ['./create-vzorek-modal.component.scss'],
  providers: [CreateVzorekModalService,
    I18n,
    { provide: NgbDateAdapter, useClass: CustomDateAdapterService },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatterService },
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }
  ]
})
export class CreateVzorekModalComponent implements OnInit {

  readonly form: FormGroup = this.createVzorekModalService.initForm()
  readonly FormNames = CreateVzorekFormEnum
  mistoUlozeniArr: MistoUlozeni[] = []

  constructor(
    public modal: NgbActiveModal,
    private createVzorekModalService: CreateVzorekModalService,
    private api: BackendApiApiService) {
  }

  onSave() {
    this.modal.close()
    console.log("form submit", this.form.getRawValue())
  }

  ngOnInit(): void {
    this.loadMistoUlozeni()
  }

  private loadMistoUlozeni() {
    this.api.datasourceControllerGetMistoUlozeni().pipe(
      take(1)
    ).subscribe(
      (mistoUlozeniArr) => this.mistoUlozeniArr = mistoUlozeniArr
    )
  }

}
