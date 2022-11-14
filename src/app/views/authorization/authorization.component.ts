import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  loginBtn:string = "primary"
  signUpBtn:string = ""

  constructor() { }

  ngOnInit(): void {
  }
  login() {
    this.signUpBtn = ""
    this.loginBtn = "primary"
  }
  signUp() {
    this.loginBtn = ""
    this.signUpBtn = "primary"
  }

}
