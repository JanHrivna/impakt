import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { Observable, take } from 'rxjs';
import { Vzorky } from '../../api/backend-api/models';
import { MistoUlozeni } from '../../api/backend-api/models/misto-ulozeni';
import { BackendApiApiService } from '../../api/backend-api/services';
import { ConfirmService } from '../../services/confirm.service';
import { CreateVzorekFormEnum } from './create-vzorek-modal-form.enum';
import { CreateVzorekModalService } from './services/create-vzorek-modal.service';
import { CustomDateAdapterService } from './services/custom-date-adapter.service';
import { CustomDateParserFormatterService } from './services/custom-date-parser-formatter.service';
import { CustomDatepickerI18n, I18n } from './services/custom-datepicker-i18n.service';

export interface CreateVzorekModalResult {
  save: boolean
}

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

  @Input()
  vzorek: Vzorky | undefined

  @Input()
  mistaUlozeni: MistoUlozeni[] = []

  readonly form: FormGroup = this.createVzorekModalService.initForm()
  readonly CreateVzorekFormEnum = CreateVzorekFormEnum

  constructor(
    private modal: NgbActiveModal,
    private createVzorekModalService: CreateVzorekModalService,
    private api: BackendApiApiService,
    private confirmService: ConfirmService) {
  }

  ngOnInit(): void {
    if (this.vzorek) this.fillForm(this.vzorek)
  }

  onSave() {
    this.createVzorek().subscribe(
      () => this.dismissModal(true)
    )
  }

  close() {
    const dismiss = () => this.dismissModal(false)
    if (this.form.pristine) dismiss()
    else {
      this.confirmService.showModal(
        () => dismiss(),
        "Opravdu zavřít?"
      )
    }
  }

  private dismissModal(save: boolean) {
    this.modal.dismiss(<CreateVzorekModalResult>{ save })
  }

  private fillForm(vzorek: Vzorky) {
    for (let formName of Object.values(CreateVzorekFormEnum)) {
      this.form.get(formName)?.setValue(vzorek[formName])
    }
  }

  private createVzorek(): Observable<any> {
    return this.api.vzorekControllerCreateVzorek({
      body: this.form.getRawValue()
    }).pipe(
      take(1)
    )
  }

}
