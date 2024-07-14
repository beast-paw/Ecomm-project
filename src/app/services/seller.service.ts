import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, SignUp } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLogedIn = new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router:Router) { }
  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/seller',
      data,
      { observe: "response" }).subscribe((result) => {
        this.isSellerLogedIn.next(true);
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
        console.warn("result", result);
      })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLogedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }
  userLogin(data:login)
  {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result:any) => {
        if(result && result.body && result.body.length)
        {
          this.isSellerLogedIn.next(true);
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
        }else{
          console.warn("user login failed");
          this.isLoginError.emit(true);
        }
      })
  }
}
