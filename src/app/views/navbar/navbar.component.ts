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

    this.http.getUserActive().subscribe((resp:any) => {
      console.log(resp)
    })
    this.UserLoggedIn()
  }

  UserLoggedIn() {
    this.http.getUserActive().subscribe(data => {
      this.ShowRegister = data.toString()
    })
  }
}
