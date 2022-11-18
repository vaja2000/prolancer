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

  userRegistracion:any

  constructor(private http:HttpService) { }

  ngOnInit(): void {


    this.userRegistracion = new FormGroup({
      'firstName': new FormControl( null, [ Validators.required, Validators.minLength(2) ] ),
      'lastName': new FormControl( null, [ Validators.required, Validators.minLength(2) ] ),
      'email': new FormControl( null, [ Validators.required, Validators.email ] ),
      'password': new FormControl( null, [ Validators.required, Validators.minLength(8) ] ),
      'confirmePassword': new FormControl( null, [ Validators.required, Validators.minLength(8) ] ),
    })

    this.submitData()
  }

  submitData() {
    this.http.registerUser(this.userRegistracion.value).subscribe(data => {
      console.log(data);
    })
  }
}
