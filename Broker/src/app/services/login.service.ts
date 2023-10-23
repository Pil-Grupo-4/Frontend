import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_USER = 'assets/json/14-06-23.json';
  constructor(private http: HttpClient) { }

  postLogin(user: User): Observable<User>{
      return this.http.post<User>(this.URL_USER, user);
  }
  
  persistUser(user: User){
    if(this.validateUser(user)){
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  validateUser(user: User): boolean{
    if(user.email != null && user.password == null){
      return true;
    }else{
      return false;
    }
  }

}


class User{
  email: string;
  password: string;
} 