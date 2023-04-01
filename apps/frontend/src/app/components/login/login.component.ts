import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, take, tap } from 'rxjs';
import { BackendApiApiService } from '../../api/backend-api/services';
import { RoutingPathName } from '../../app-routing.module';
import { AuthService } from '../../services/auth.service';

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
  readonly LOGIN_ERR = "Autentizace selhala!"
  loginErrVisible = false

  constructor(
    private api: BackendApiApiService,
    private router: Router) { }

  ngOnInit(): void { }

  onLogin() {
    this.api.authControllerLogin({
      body: {
        username: this.form.get(FormName.USER)?.value,
        password: this.form.get(FormName.PASS)?.value
      }
    }).pipe(
      take(1),
      tap(
        (res) => {
          AuthService.loginUser(res.username)
          this.router.navigate(['', RoutingPathName.OVERVIEW])
          this.loginErrVisible = false
        }
      ),
      catchError(
        (err: HttpErrorResponse) => {
          if (err.status === HttpStatusCode.Unauthorized) {
            this.loginErrVisible = true
          }
          return EMPTY
        }
      )
    ).subscribe()
  }

}
