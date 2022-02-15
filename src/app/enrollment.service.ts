import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http:HttpClient) {

   }
   _url="http://localhost:3000/enroll";

   enroll(user:User)
   {
     return this.http.post(this._url,user);
   }
}
