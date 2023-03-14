import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void { }

  login() {

  }

}
