import { OrdertableComponent } from './../ordertable/ordertable.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,
    OrdertableComponent,
    SidebarComponent,



  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
