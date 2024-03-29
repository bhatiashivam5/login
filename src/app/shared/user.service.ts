import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUser, User } from './user.model';
import { Useradd } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public newUser: User = {
    fname: '',
    lname: '',
    email: '',
    contact: '',
    password: '',
    // Fname: '',
    // Lname: '',
    // Address1: '',
    // Address2: '',
    // City: '',
    // State: '',
    // Zip: ''
  }

  public Useradd: Useradd = {
    Fname: '',
    Lname: '',
    Address1: '',
    Address2: '',
    City: '',
    State: '',
    Zip: ''
  }

  public existingUser: loginUser = {
    email: '',
    password: ''
  }
  constructor(private http: HttpClient) { }
  register(user: User) {
    return this.http.post('http://localhost:3000/reg', user);
  }

  login(existUser: loginUser) {
    return this.http.post('http://localhost:3000/auth', existUser);
  }

  // to store user address
  address(address: Useradd) {
    return this.http.put('http://localhost:3000/address', address);
  }



  // to display profileinfo

  display(id: any) {
    return this.http.get('http://localhost:3000/userinfo/' + id);
  }


  //to store the token after login

  setToken(token: string) {
    localStorage.setItem('usertoken', token);
  }

  getToken() {
    return localStorage.getItem('usertoken');
  }

  deleteToken() {
    localStorage.removeItem('usertoken');
  }


  //to store userid
  setuserId(id: string) {
    localStorage.setItem('userid', id);
  }
  getuserId() {
    return localStorage.getItem('userid');
  }
  deleteuserId() {
    localStorage.removeItem('userid');
  }

  getPayload() {
    var token = this.getToken();
    if (token) {
      var userpayload = atob(token.split('.')[1]);
      return JSON.parse(userpayload);
    }
    else {
      return null;
    }

  }

  isloggedIn() {
    var userpayload = this.getPayload();
    if (userpayload) {
      return userpayload.exp > Date.now() / 10000;
    }
    else {
      return null;
    }
  }
}

