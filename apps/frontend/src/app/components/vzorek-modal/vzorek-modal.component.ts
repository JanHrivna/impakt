import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { of, take } from 'rxjs';
import { Analyzy, TypyAnalyz, VzorekDto, Vzorky } from '../../api/backend-api/models';
import { MistoUlozeni } from '../../api/backend-api/models/misto-ulozeni';
import { BackendApiApiService } from '../../api/backend-api/services';
import { ERR_REQ_FIELDS } from '../../constants';
import { ConfirmService } from '../../services/confirm.service';
import { AnalyzyFormComponent } from './analyzy-form/analyzy-form.component';
import { CustomDateAdapterService } from './services/custom-date-adapter.service';
import { CustomDateParserFormatterService } from './services/custom-date-parser-formatter.service';
import { CustomDatepickerI18n, I18n } from './services/custom-datepicker-i18n.service';
import { VzorekModalService } from './services/vzorek-modal.service';
import { CreateVzorekFormEnum } from './vzorek-modal-form.enum';

export interface VzorekModalResult {
  save: boolean
}

@Component({
  templateUrl: './vzorek-modal.component.html',
  styleUrls: ['./vzorek-modal.component.scss'],
  providers: [VzorekModalService,
    I18n,
    { provide: NgbDateAdapter, useClass: CustomDateAdapterService },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatterService },
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }
  ]
})
export class VzorekModalComponent implements OnInit {

  @Input()
  vzorekDto: VzorekDto | undefined

  @Input()
  mistaUlozeni: MistoUlozeni[] = []

  @Input()
  typyAnalyz: TypyAnalyz[] = []

  readonly form: FormGroup = this.createVzorekModalService.initForm()
  readonly ERR_REQ_FIELDS = ERR_REQ_FIELDS
  readonly CreateVzorekFormEnum = CreateVzorekFormEnum

  activeTab = 1

  @ViewChild(AnalyzyFormComponent) private analyzyFormCmp: AnalyzyFormComponent | null = null

  constructor(
    private modal: NgbActiveModal,
    private createVzorekModalService: VzorekModalService,
    private api: BackendApiApiService,
    private confirmService: ConfirmService) {
  }

  ngOnInit(): void {
    if (this.vzorekDto) this.fillForm(this.vzorekDto.vzorek)
  }

  onSave() {
    this.createVzorek().subscribe(
      () => {
        this.dismissModal(true)
      }
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
    this.modal.dismiss(<VzorekModalResult>{ save })
  }

  private fillForm(vzorek: Vzorky) {
    for (let formName of Object.values(CreateVzorekFormEnum)) {
      this.form.get(formName)?.setValue(vzorek[formName])
    }
    if (vzorek) this.form.addControl("id", new FormControl(vzorek.id))
  }

  private createVzorek() {
    const body: VzorekDto = {
      vzorek: this.form.getRawValue(),
      analyzy: this.analyzyFormCmp?.getFormValues() as Analyzy[]
    }
    return this.api.vzorekControllerUpsertVzorek({ body }).pipe(
      take(1)
    )
  }

  isDisabled() {
    return !this.form.valid || !this.analyzyFormCmp?.form?.valid
  }

}
