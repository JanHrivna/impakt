import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface ConfirmModalResult {
  confirmed: boolean
}

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent {

  @Input()
  msg: string | undefined

  constructor(private modal: NgbActiveModal) { }

  close(confirmed: boolean) {
    this.modal.dismiss(<ConfirmModalResult>{ confirmed })
  }

}
