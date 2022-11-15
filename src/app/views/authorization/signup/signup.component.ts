import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  faUser = faUser
  faEnvelope = faEnvelope
  faKey = faKey

  userRegistracion:any

  constructor() { }

  ngOnInit(): void {
    this.userRegistracion = new FormGroup({
      'firstName': new FormControl( null, [ Validators.required, Validators.minLength(2) ] ),
      'lastName': new FormControl( null, [ Validators.required, Validators.minLength(2) ] ),
      'email': new FormControl( null, [ Validators.required, Validators.email ] ),
      'password': new FormControl( null, [ Validators.required, Validators.minLength(8) ] ),
      'confirmePassword': new FormControl( null, [ Validators.required, Validators.minLength(8) ] ),
    })
  }
  submitData() {
    console.log(this.userRegistracion.value)
  }
}
