import { Routes, RouterModule  } from '@angular/router';
import { LoginComponent } from './components/security/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CashboxComponent } from './components/financial/cashbox/cashbox.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HomepageComponent } from './components/homepage/homepage.component';


export const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'caixa', component: DashboardComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'pedidos', component: OrdersComponent },
  { path: 'financeiro', component: CashboxComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }