import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  domain:string = "http://localhost:8000/"

  constructor(private http:HttpClient) {}

  getUserActive() {
    return this.http.post(this.domain + "API/UserLoggedIn", null,{ })
  }

  loginUser(data: any) {
    return this.http.post(this.domain + "API/LoginUser", null,{ })
  }

  registerUser(data: any) {
    return this.http.post(this.domain + "API/RegisterUser", null, { })
  }
}