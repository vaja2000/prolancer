import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  faUser = faUser
  faEnvelope = faEnvelope
  faKey = faKey
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordPattern = '/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/'

  userRegistracion:any

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.userRegistracion = new FormGroup({
      'Firstname': new FormControl( null, [ Validators.required, Validators.minLength(2) ] ),
      'Lastname': new FormControl( null, [ Validators.required, Validators.minLength(2) ] ),
      'Username': new FormControl( null, [ Validators.required, Validators.minLength(5)] ),
      'Email': new FormControl( null, [ Validators.required,Validators.pattern(this.emailPattern), Validators.email ] ),
      'Password': new FormControl( null, [ Validators.required, Validators.minLength(8),Validators. ] ),
      'ConfirmPassword': new FormControl( null, [ Validators.required, Validators.minLength(8) ] ),
    })
  }

  submitData() {
    this.http.registerUser(this.userRegistracion.value).subscribe((resp:any) => {
      console.log(resp)
    })
  }
}
