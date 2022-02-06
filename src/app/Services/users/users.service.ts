import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { users } from './users.interface';

@Injectable({
  providedIn: 'root'
})
export class usersService {

  constructor(private http :HttpClient) { }
  _url:string="https://jsonplaceholder.typicode.com/users";
  getPosts():Observable<users[]>
  {
    return this.http.get<users[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"خلي بالك فب مسكلة في السيرفر")
    }))
  }
}

