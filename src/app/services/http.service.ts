
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  domain:string = "http://localhost:8000/"

  constructor(private http:HttpClient) {}

}

