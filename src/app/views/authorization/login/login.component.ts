import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faUser = faUser
  faKey = faKey

  constructor(private  dialogRef: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialogRef.open(ModalComponent)
  }
}
