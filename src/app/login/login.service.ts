import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signin } from '../shared-classes-and-types/Login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  _url="http//:localhost:4200/login";

  login(login:signin){
    return this.http.post(this._url,login)
  }
}
