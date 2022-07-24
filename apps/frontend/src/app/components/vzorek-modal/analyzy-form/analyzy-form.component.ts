import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Analyzy, TypyAnalyz } from '../../../api/backend-api/models';

enum FormName {
  DEN = "den",
  PROVEDL = "provedl",
  VYSLEDEK = "vysledek"
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
    for (let analyza of this.analyzy ?? []) {
      this.form.push(new FormGroup({
        [FormName.DEN]: new FormControl(analyza.den),
        [FormName.PROVEDL]: new FormControl(analyza.provedl),
        [FormName.VYSLEDEK]: new FormControl(analyza.vysledek),
      }))
    }

  }

}
