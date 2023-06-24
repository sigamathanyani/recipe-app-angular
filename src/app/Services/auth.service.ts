import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly Root_URL:string;

  constructor(private http: HttpClient) { 
    this.Root_URL = 'http://localhost:8000/';
  }

  register(formValue:{}){
    return this.http.post(`${this.Root_URL}api/auth/register/`,formValue);
  }

  login(formValue:{}){
    return this.http.post(`${this.Root_URL}api/auth/login/`,formValue);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

}
