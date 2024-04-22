import { threadId } from 'worker_threads';
import { modelFinancial, modelMenu, modelTransations } from './../../models/financial.model';
import { OrdertableComponent } from './../ordertable/ordertable.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FinancialService } from '../../service/financial.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

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
  data$ = new Observable <modelTransations[]>;
  sales$ = new Observable <modelFinancial[]>;
  productActive: modelMenu[] = [];
  productDeactivate: modelMenu[] = [];
  totalMenu: number = 0;
  totalSales: number = 0;
  a: boolean = true;



  constructor(private FinancialService: FinancialService){}

  ngOnInit(): void {
    this.getMenu();
    this.getTransations();
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


  getTransations(){
    this.data$ = this.FinancialService.getTransations();
    this.data$.subscribe(response => {
      response.forEach(item => {
        


      })



    })



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
