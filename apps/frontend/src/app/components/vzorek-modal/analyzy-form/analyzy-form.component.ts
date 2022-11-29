import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Analyzy, TypyAnalyz } from '../../../api/backend-api/models';

enum FormName {
  KOD = "kod",
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
    this.initForm()
  }

  private initForm() {
    const analyzy: any[] = this.analyzy ?? this.typyAnalyz
    for (let analyza of analyzy) {
      this.form.push(new FormGroup({
        [FormName.KOD]: new FormControl(analyza.kod),
        [FormName.DEN]: new FormControl(analyza?.den),
        [FormName.PROVEDL]: new FormControl(analyza?.provedl),
        [FormName.VYSLEDEK]: new FormControl(analyza?.vysledek),
      }))
    }
  }

}
