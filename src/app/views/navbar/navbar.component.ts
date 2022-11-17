import { Component, HostListener, OnInit } from '@angular/core';
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
    this.UserLoggedIn()
  }

  navbarBackgroundColor:string = "transparent"

  @HostListener("document:scroll")
  onScroll() {
    if (window.scrollY > 70) {
      this.navbarBackgroundColor = "#5875e4"
    } else {
      this.navbarBackgroundColor = "transparent"
    }
  }

  UserLoggedIn() {
    this.http.getUserActive().subscribe(data => {
      this.ShowRegister = data.toString()
    })
  }
}
