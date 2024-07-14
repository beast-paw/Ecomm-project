import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, HttpClientModule,NgSwitch,NgSwitchCase,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuType: String = 'default';
  sellerName:string ='';
  constructor(private route: Router) {

   }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      // this.menuType = 'default';
      
      if (val.url) {
        console.warn(val);
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
          console.warn("in seller area");
          this.menuType='seller';
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.name;

        }else{
          console.warn("outside seller area");
          this.menuType='default';
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
}
