import { Component, Input } from '@angular/core';
import { CarddashComponent } from '../cards/carddash/carddash.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { TableComponent } from '../table/table.component';

import { CustomerComponent } from '../customer/customer.component';
import { CardWebinarComponent } from '../card-webinar/card-webinar.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { BestServiceComponent } from '../best-service/best-service.component';

import { TableFreeComponent } from '../table-free/table-free.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { OrdertableComponent } from '../ordertable/ordertable.component';
import { LoginComponent } from '../security/login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CarddashComponent,
    CalendarComponent,
    TableComponent,
    LoginComponent,
    CustomerComponent,
    CardWebinarComponent,
    LineChartComponent,
    BestServiceComponent,
    CommonModule,
    TableFreeComponent,
    SidebarComponent,
    OrdertableComponent,
  
  
  
  
  ],



  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(){}



}



