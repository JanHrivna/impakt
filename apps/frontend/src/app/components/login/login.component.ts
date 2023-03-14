import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { BackendApiApiService } from '../../api/backend-api/services';

enum FormName {
  USER = "username",
  PASS = "password"
}

@Component({
  selector: 'frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  readonly FormName = FormName
  readonly form = new FormGroup({
    [FormName.USER]: new FormControl(),
    [FormName.PASS]: new FormControl()
  })
  passHidden = true

  constructor(private api: BackendApiApiService) { }

  ngOnInit(): void { }

  onLogin() {
    this.api.loginControllerLogin({
      body: {
        username: this.form.get(FormName.USER)?.value,
        password: this.form.get(FormName.PASS)?.value
      }
    }).pipe(take(1)).subscribe()
  }

}
