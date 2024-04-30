import { ModelOrderComponent } from './components/models/model-order/model-order.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/security/login/login.component';
import { CommonModule } from '@angular/common';
import { CashboxComponent } from './components/financial/cashbox/cashbox.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CarddashComponent } from './components/cards/carddash/carddash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthInterceptor } from './auth.interceptor';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Router, NavigationEnd } from '@angular/router';





@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, 
    SidebarComponent, 
    CarddashComponent,
    HttpClientModule,
    FormsModule,
    LoginComponent,
    CommonModule,
    CashboxComponent,
    DashboardComponent,
    LineChartComponent,
    MenuComponent,
    OrdersComponent,
    HomepageComponent,
    ModelOrderComponent,
  
  
  
  
  
  
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  constructor(private router: Router) {}

  ngOnInit() {

    const token = localStorage.getItem('token');


    if (!token) {
      this.router.navigate(['/login']);
    }
  }


  isLoginPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/home' || this.router.url ==='';
  }
}