import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { take } from "rxjs";
import { ConfirmModalComponent, ConfirmModalResult } from "../components/confirm-modal/confirm-modal.component";

@Injectable({
    providedIn: 'root'
})
export class ConfirmService {

    private readonly DEFAULT_MSG = "Chcete potvrdit?"

    constructor(private modalService: NgbModal) { }

    showModal(onConfirm: () => any, msg = this.DEFAULT_MSG) {
        const modalRef = this.modalService.open(ConfirmModalComponent, {
            size: "sm",
            backdrop: "static"
        })
        modalRef.dismissed.pipe(
            take(1)
        ).subscribe(
            (res: ConfirmModalResult) => {
                if (res.confirmed) onConfirm()
            }
        )
        modalRef.componentInstance.msg = msg
    }

}