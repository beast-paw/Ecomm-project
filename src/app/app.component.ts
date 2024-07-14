import { Component } from '@angular/core';
import { RouterModule,RouterLinkActive,RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet, RouterLink, RouterLinkActive,HeaderComponent,SellerAuthComponent,HomeComponent,FormsModule
    ,HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomm-project';
}
