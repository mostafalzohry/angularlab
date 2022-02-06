import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { posts } from './posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http :HttpClient) { }
  _url:string="https://jsonplaceholder.typicode.com/posts";
  getPosts():Observable<posts[]>
  {
    return this.http.get<posts[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"خلي بالك فب مسكلة في السيرفر")
    }))
  }
}
