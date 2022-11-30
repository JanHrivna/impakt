import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Analyzy, TypyAnalyz } from '../../../api/backend-api/models';

enum FormName {
  ID_TYP = "id_typ",
  KOD = "kod",
  DEN = "den",
  PROVEDL = "provedl",
  VYSLEDEK = "vysledek",
  USED = "used"
}


interface FormValue {
  [FormName.ID_TYP]: number,
  [FormName.KOD]: string,
  [FormName.DEN]: string,
  [FormName.PROVEDL]: string,
  [FormName.VYSLEDEK]: string,
  [FormName.USED]: boolean
}

interface AnalyzyExtended extends Analyzy {
  kod: string
}

@Component({
  selector: 'app-analyzy-form',
  templateUrl: './analyzy-form.component.html',
  styleUrls: ['./analyzy-form.component.scss', '../vzorek-modal.component.scss'],
})
export class AnalyzyFormComponent implements OnInit {

  @Input()
  analyzy: AnalyzyExtended[] | undefined = []

  @Input()
  typyAnalyz: TypyAnalyz[] = []

  readonly FormName = FormName
  form: FormArray = new FormArray([])

  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    const analyzy: any[] = this.analyzy ?? this.typyAnalyz
    for (let analyza of analyzy) {
      this.form.push(new FormGroup({
        [FormName.ID_TYP]: new FormControl(analyza.id_typ ?? analyza.id),
        [FormName.KOD]: new FormControl(analyza.kod),
        [FormName.DEN]: new FormControl({ value: analyza?.den, disabled: !analyza?.den }),
        [FormName.PROVEDL]: new FormControl({ value: analyza?.provedl, disabled: !analyza?.provedl }),
        [FormName.VYSLEDEK]: new FormControl({ value: analyza?.vysledek, disabled: !analyza?.vysledek }),
        [FormName.USED]: new FormControl(!!analyza?.den)
      }))
    }
  }

  onToggle(i: number) {
    const fg = this.form.get(i.toString())
    const used: boolean = !fg?.get(FormName.USED)?.value
    const denFc = fg?.get(FormName.DEN)
    const provedlFc = fg?.get(FormName.PROVEDL)
    const vyslFc = fg?.get(FormName.VYSLEDEK)
    if (used) {
      denFc?.enable()
      provedlFc?.enable()
      vyslFc?.enable()
    }
    else {
      denFc?.disable()
      provedlFc?.disable()
      vyslFc?.disable()
    }
  }

  getFormValues(): Analyzy[] {
    const formValues: FormValue[] = this.form.getRawValue()
    return formValues.filter(v => v.used).map(v => ({
      id_typ: v.id_typ,
      den: v.den,
      provedl: v.provedl,
      vysledek: v.vysledek
    }))
  }

}
