import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getUserActive().subscribe((resp:any) => {
      console.log(resp)
    })
  }


}
