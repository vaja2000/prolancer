import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userActive:boolean = false

  constructor(private http:HttpService) { }

  ShowRegister:string = "false"

  ngOnInit(): void {
<<<<<<< HEAD
    this.UserLoggedIn()
=======
    this.http.getUserActive().subscribe((resp:any) => {
      this.userActive = resp
    })
>>>>>>> edb9e4183393b215b167e0796c3e6b396fc99e68
  }

  UserLoggedIn() {
    this.http.getUserActive().subscribe(data => {
      this.ShowRegister = data.toString()
    })
  }
}
