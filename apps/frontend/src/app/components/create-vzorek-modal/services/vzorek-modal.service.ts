import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class VzorekModalService {

    initForm(): FormGroup {
        return new FormGroup({
            druh: new FormControl(null, Validators.required),
            popis: new FormControl(null, Validators.required),
            dovoz: new FormControl(null, Validators.required),
            dovoz_datum: new FormControl(null, Validators.required),
            oznaceni_svlecky: new FormControl(null, Validators.required),
            sber_svlecky_datum: new FormControl(null, Validators.required),
            sber_svlecky_misto: new FormControl(null, Validators.required),
            cislo_kotce: new FormControl(null, Validators.required),
            ulozeni_svlecky_misto: new FormControl(null, Validators.required),
            oznaceni_vzorku_svlecky: new FormControl(null, Validators.required),
            pred_posl_svlecenim_misto: new FormControl(null, Validators.required),
            puvodni_hmotnost: new FormControl(null, Validators.required),
            priprava_vzorku_typ: new FormControl(null, Validators.required),
            priprava_vzorku_kdy: new FormControl(null, Validators.required),
            priprava_vzorku_kdo: new FormControl(null, Validators.required),
            priprava_vzorku_misto: new FormControl(null, Validators.required),
            priprava_vzorku_oplach: new FormControl(null, Validators.required),
            priprava_vzorku_oplach_kdy: new FormControl(null, Validators.required),
            priprava_vzorku_suseni: new FormControl(null, Validators.required),
            ulozeni_vzorku_do_analyzy_misto: new FormControl(null, Validators.required),
            ulozeni_vzorku_do_analyzy_objekt: new FormControl(null, Validators.required),
            ulozeni_vzorku_aktualni: new FormControl(null, Validators.required),
            dodani_albertov_datum: new FormControl(null, Validators.required)
        })

        // cislo_vzorku
        // navazka_g
        // navazeno_kdy
        // navazeno_kdo

    }

}
