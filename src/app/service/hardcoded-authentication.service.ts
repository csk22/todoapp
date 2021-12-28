import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password:string):boolean{
    if(this.isUserLoggedIn()){
        return true;
    }
    
    if(username==='charan' && password === "1234"){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    } 

    return false;
  }

  isUserLoggedIn():boolean{
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }

  logout():void{
    sessionStorage.removeItem('authenticatedUser');
  }
}
