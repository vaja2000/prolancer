import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/services/http.service';
import { ModalComponent } from 'src/app/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private http:HttpService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.userRegistracion = new FormGroup({
      'Firstname': new FormControl( null, [ Validators.required, Validators.minLength(2) ] ),
      'Lastname': new FormControl( null, [ Validators.required, Validators.minLength(2) ] ),
      'Username': new FormControl( null, [ Validators.required, Validators.minLength(5)] ),
      'Email': new FormControl( null, [ Validators.required, Validators.email ] ),
      'Password': new FormControl( null, [ Validators.required, Validators.minLength(8) ] ),
      'ConfirmPassword': new FormControl( null, [ Validators.required, Validators.minLength(8) ] ),
    })
  }

  submitData() {
    this.http.registerUser(this.userRegistracion.value).subscribe(Res => {
      this.openDialog(Res);
    })
  }

  openDialog(Res: any) {
    this.dialogRef.open(ModalComponent)
  }
}
