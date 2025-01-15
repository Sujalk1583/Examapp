import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{

  constructor(private httpclient:HttpClient) 
  { 

  }

  saveUser(user:User) 
  {
    return this.httpclient.post<User>("http://localhost:8000/saveUser/",user);
  }

  validate(user:User)
  {
    return this.httpclient.post<boolean>("http://localhost:8000/validate/",user);

    // [true] observable object
  }

}





// variable names from User class in Angular and Java must be same .

export class User
{
  username:string;
  password:string;
  mobno:number;
  emailid:string;

  constructor(username:string,password:string,mobno:number,emailid:string)
  {
    this.username=username;
    this.password=password;
    this.mobno=mobno;
    this.emailid=emailid;

  }
}
