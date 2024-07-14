import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router, RouterModule, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { login, SignUp } from '../data-type';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterLinkActive, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) { }
  showLogin = false;
  authEroor: string = '';
  ngOnInit(): void {
    this.seller.reloadSeller()
  }


  signUp(data: SignUp): void {
    this.seller.userSignUp(data)
  }
  Login(data: login): void {
    this.seller.userLogin(data)
  }
  openLogin() {
    this.showLogin = true;
    this.authEroor="";
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authEroor = "Email or password is not correct";
      }
    })
  }
  openSignUp() {
    this.showLogin = false;
  }
}

