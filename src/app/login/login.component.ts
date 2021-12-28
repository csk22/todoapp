import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "charan";
  password:string = "123";
  errormsg:string = "Invalid Credentials";
  InvalidLogin:boolean=false;

  constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
    console.log("login component called");
  }

  login():void{
    console.log(this.username);
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.InvalidLogin=false;
      //Redirect to welcome page
      this.router.navigate(['welcome',this.username]);
    } else{
      this.InvalidLogin=true;
    }
  }

}
