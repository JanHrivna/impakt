import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateVzorekFormEnum } from './create-vzorek-modal-form.enum';
import { CreateVzorekModalService } from './create-vzorek-modal.service';

@Component({
  selector: 'frontend-create-vzorek-modal',
  templateUrl: './create-vzorek-modal.component.html',
  styleUrls: ['./create-vzorek-modal.component.scss'],
  providers: [CreateVzorekModalService]
})
export class CreateVzorekModalComponent implements OnInit {

  readonly form: FormGroup = this.createVzorekModalService.initForm()
  readonly FormNames = CreateVzorekFormEnum

  constructor(
    public modal: NgbActiveModal,
    private createVzorekModalService: CreateVzorekModalService) {
  }

  onSave() {
    this.modal.close()
    console.log("form submit", this.form.getRawValue())
  }

  ngOnInit(): void { }

}
