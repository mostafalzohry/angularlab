import { Component, OnInit } from '@angular/core';
import { usersService } from './../Services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private UsersService:usersService) { }
  UsersList:any;
  errorMsg:any;
  viewUser(){

  }
  ngOnInit(): void {

    this.UsersService.getPosts().subscribe(
      data=>{
        this.UsersList=data;
      },
      errorData=>{
        this.errorMsg=errorData;
      }

    )
  }
}

