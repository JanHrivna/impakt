import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Analyzy } from '../../api/backend-api/models';

enum FormName {
  DEN = "den",
  PROVEDL = "provedl",
  VYSLEDEK = "vysledek"
}

@Component({
  selector: 'app-analyzy-form',
  templateUrl: './analyzy-form.component.html',
  styleUrls: ['./analyzy-form.component.scss'],
})
export class AnalyzyFormComponent implements OnInit {

  @Input()
  analyzy: Analyzy[] | undefined = []

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
