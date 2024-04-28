
import { modelFinancial, modelMenu, modelOrders, modelTransations } from './../../models/financial.model';
import { OrdertableComponent } from './../ordertable/ordertable.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FinancialService } from '../../service/financial.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { time } from 'console';
import { NgZone } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModelOrderComponent } from '../models/model-order/model-order.component';

enum TransactionStatus {
  Aberto = 'OPEN',
  Fechado = 'CLOSED',
  Cancelado = 'CANCELED',
  Pronto = 'READY',
  em_preparo = 'PREPARATION'
}

enum TransactionTypeOrder {
  Mesa = 'Mesa',
  Delivery = 'Delivery'
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,
    OrdertableComponent,
    SidebarComponent,
    FormsModule,
    ModelOrderComponent,
    



  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  menu$ = new Observable <modelMenu[]>;
  data$ = new Observable <modelOrders[]>;

  productActive: modelMenu[] = [];
  productDeactivate: modelMenu[] = [];
  totalMenu: number = 0;
  totalSales: number = 0;
  isCheckedAll: boolean = false;
  isCheckedClose: boolean = false;
  isCheckedCanceled: boolean = false;
  isCheckedTable: boolean = false;
  isCheckedDelivery: boolean = false;
  orderOpen: modelOrders[] = [];
  orderClose: modelOrders[] = [];
  orderCanceled: modelOrders[] = [];
  orderPreparation: modelOrders[] = [];
  orderTable: modelOrders[] = [];
  orderDelivery: modelOrders[] = [];
  minutesPassed: number = 0;
  secondsPassed: number = 0;
  ordersWithCounters: any[] = [];
  idOrder: number = 0;
  selectedMethod: string = '';
  selectedOption: string = '';
  constructor(private FinancialService: FinancialService, private ngZone: NgZone){}

  ngOnInit(): void {
    this.getMenu();
    this.getOrders();
    console.log(this.selectedOption)
    
    

 
    


  }


  

  getMenu() {
    this.menu$ = this.FinancialService.obterMenu();
    this.menu$.subscribe(response => {
      response.forEach(item => {
        this.totalMenu += 1;
        if(item.status){
          this.productActive.push(item)
        }
        else{
          this.productDeactivate.push(item)
        }
      });
    });
  }
  getOrders() {
    this.data$ = this.FinancialService.getOrdersService(false);
    this.data$.subscribe((orders: modelOrders[]) => {
      this.totalSales = orders.length
      orders.forEach(item =>{
        this.selectedOption = item.status


      })
   
  
      this.orderOpen = this.ordersWithCounters.filter((order: modelOrders) => order.status === TransactionStatus.Aberto);
      this.orderClose = this.ordersWithCounters.filter((order: modelOrders) => order.status === TransactionStatus.Fechado);
      this.orderTable = this.ordersWithCounters.filter((order: modelOrders) => order.type_order === TransactionTypeOrder.Mesa);
      this.orderDelivery = this.ordersWithCounters.filter((order: modelOrders) => order.type_order === TransactionTypeOrder.Delivery);
      this.orderCanceled = this.ordersWithCounters.filter((order: modelOrders) => order.status === TransactionStatus.Cancelado);
      this.orderPreparation = this.ordersWithCounters.filter((order: modelOrders) => order.status === TransactionStatus.em_preparo);

    });
    
  }



  selectMethod(method: string, total: string) {
    
    if (method === null) {
      return;
  }
  this.selectedMethod = method;

}


onSelectChange(value: string) {
  this.selectedOption = value; 
  console.log(this.selectedOption); 
}


}