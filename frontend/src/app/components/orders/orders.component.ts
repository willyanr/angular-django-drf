import { threadId } from 'worker_threads';
import { modelFinancial, modelMenu, modelOrders, modelTransations } from './../../models/financial.model';
import { OrdertableComponent } from './../ordertable/ordertable.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FinancialService } from '../../service/financial.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

enum TransactionStatus {
  Aberto = 'Aberto',
  Fechado = 'Fechado',
  Cancelado = 'Cancelado'
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



  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  menu$ = new Observable <modelMenu[]>;
  data$ = new Observable <modelOrders[]>;
  sales$ = new Observable <modelFinancial[]>;
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
  orderTable: modelOrders[] = [];
  orderDelivery: modelOrders[] = [];
  minutesPassed: number = 0;
  secondsPassed: number = 0;



  constructor(private FinancialService: FinancialService){}

  ngOnInit(): void {
    this.getMenu();
    this.getOrders();
    this.getSales();


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
    this.data$.subscribe(transactions => {
      
      this.orderOpen = transactions.filter(transaction => transaction.status === TransactionStatus.Aberto);
      this.orderClose = transactions.filter(transaction => transaction.status === TransactionStatus.Fechado);
      this.orderTable = transactions.filter(transaction => transaction.type_order === TransactionTypeOrder.Mesa);
      this.orderDelivery = transactions.filter(transaction => transaction.type_order === TransactionTypeOrder.Delivery);
      this.orderCanceled = transactions.filter(transaction => transaction.status === TransactionStatus.Cancelado);
      transactions.forEach(response => {
        this.startCounter(new Date(response.date));


      })
    
      
    });
  }
  
  startCounter(startTime: Date): void {
    setInterval(() => {
      const currentTime = new Date();
      const differenceMs = currentTime.getTime() - startTime.getTime();
      const totalSeconds = Math.floor(differenceMs / 1000);
      this.minutesPassed = Math.floor(totalSeconds / 60);
      this.secondsPassed = totalSeconds % 60;
    }, 1000);
  }
  
  getSales(){
    this.sales$ = this.FinancialService.getSales();
    this.sales$.subscribe(response => {
      response.forEach(item => {
        this.totalSales += 1;
        


      })



    })



  }





}
