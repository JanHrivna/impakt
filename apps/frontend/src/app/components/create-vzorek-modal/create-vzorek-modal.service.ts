import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable()
export class CreateVzorekModalService {

    initForm(): FormGroup {
        return new FormGroup({
            druh: new FormControl(),
            popis: new FormControl(),
            dovoz: new FormControl(),
            dovoz_datum: new FormControl(),
            oznaceni_svlecky: new FormControl(),
            sber_svlecky_datum: new FormControl(),
            sber_svlecky_misto: new FormControl(),
            cislo_kotce: new FormControl(),
            ulozeni_svlecky_misto: new FormControl(),
            oznaceni_vzorku_svlecky: new FormControl(),
            pred_posl_svlecenim_misto: new FormControl(),
            puvodni_hmotnost: new FormControl(),
            priprava_vzorku_typ: new FormControl(),
            priprava_vzorku_kdy: new FormControl(),
            priprava_vzorku_kdo: new FormControl(),
            priprava_vzorku_misto: new FormControl(),
            priprava_vzorku_oplach: new FormControl(),
            priprava_vzorku_oplach_kdy: new FormControl(),
            priprava_vzorku_suseni: new FormControl(),
            ulozeni_vzorku_do_analyzy_misto: new FormControl(),
            ulozeni_vzorku_do_analyzy_objekt: new FormControl(),
            ulozeni_vzorku_aktualni: new FormControl(),
            dodani_albertov_datum: new FormControl(),
            pozadovane_analyzy: new FormControl()
        })

        // cislo_vzorku
        // navazka_g
        // navazeno_kdy
        // navazeno_kdo

    }

}
