import { Component, OnInit } from '@angular/core';
import { PostsService } from './../Services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private PostsService:PostsService) { }
  postsList:any;
  errorMsg:any;
  viewPost(){

  }
  ngOnInit(): void {
    this.PostsService.getPosts().subscribe(
      data=>{
        this.postsList=data;
      },
      errorData=>{
        this.errorMsg=errorData;
      }

    )
  }

}
