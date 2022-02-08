import { Component, OnInit } from '@angular/core';
import { signin } from '../shared-classes-and-types/Login';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hamada=new signin("","");
  log(){
    if(this.hamada.email == localStorage.getItem("email") && this.hamada.password == localStorage.getItem("password")){
      return console.log("you loged in successfuly")
     }
     else {
      return console.log("please check your user & password")
     }
    // console.log(this.hamada)
    // console.log(this.hamada.email)
    // console.log(this.hamada.password)
  }

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

}

