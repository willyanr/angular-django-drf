


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modelFinancial, modelBox, modelMenu, modelCategory, modelMenuItem, modelTransations, modelOrders } from '../../../models/financial.model'; 
import { FinancialService } from '../../../service/financial.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, never, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import test from 'node:test';
import { fail } from 'node:assert';




@Component({
  selector: 'app-carddash',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule, ],
  templateUrl: './carddash.component.html',
  styleUrl: './carddash.component.css'
})

export class CarddashComponent implements OnInit {
  selectedCategory: any;
  
  salesLength: number = 0;
  menu$ = new Observable<modelMenu[]>;
  categories$ = new Observable<modelCategory[]>;
  menuItems$ = new Observable<modelMenuItem[]>;

  transations$ = new Observable<modelOrders[]>;
  alertaSucesso = false;
  alertaSucessoBox = false;
  alertError = false;
  alertErrorBox = false;
  private destroy$: Subject<void> = new Subject<void>();


  selectedMenuItem: any = null; 
  id = '';
  quantity = '';
  date = '';
  box: number = 0;
  myModal: any;
  user:any;
  name = '';
  value_start: number = 0;
  data$ = new Observable<modelBox[]>;
  date_close = '';
  total_balance: number = 0;
  sales$ = new Observable<modelFinancial[]>;
  revenues: number = 1;
  total: any;
  end = '';
  ticket_m: number = 0;
  table = '';
  firstName = '';

  constructor(private FinancialService: FinancialService,) {}
  
  ngOnInit(): void {
    this.getData();
    this.obterMenu();
    this.obterCategoria();
    this.Sales();
    this.Transations();
    this.tableSelect();
    console.log('vvvvvvvv', this.sales$)
    
  }
  
  cadastrarVenda() {
    const formData: modelFinancial = {
      quantity: this.quantity,
      date: this.date,
      box: this.box,
      menu_item: this.selectedMenuItem,
      id: this.id,

    };

    this.FinancialService.cadastrarVenda(formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(_=> {
        
        this.Transations()
       

        this.alertaSucesso = true;
        setTimeout(() => {
          this.alertaSucesso = false;
        }, 4000);

      },
      (error) => { 
        
        this.alertError = true;
        setTimeout(() => {
          this.alertError = false;
        }, 4000);
       
      }
      
    );
      
}
ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}



  obterMenu(){
    this.menuItems$ = this.FinancialService.obterMenu();

  }

  obterCategoria(){

    this.categories$ = this.FinancialService.obterMenu();


  }
  


  startBox() {
    const formData: modelBox = {
      id: this.id,
      name: this.name,
      value_start: this.value_start,
      date: this.date,
      user: this.user,
      total_balance: this.total_balance,
      

    };

    this.FinancialService.startCashBox(formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.alertaSucessoBox = true;
        setTimeout(() => {
          this.alertaSucessoBox = false;
        }, 4000);
        

      },
      (error) => { 
        
        this.alertErrorBox = true;
        setTimeout(() => {
          this.alertErrorBox = false;
        }, 4000);
       
      }
    );

}


getData() {

  this.data$ = this.FinancialService.obterDadosFinanceiros(); 
  this.data$.subscribe(data => {
    let teste = data




  })
}


Sales() {
  this.sales$ = this.FinancialService.getSales();
  this.sales$.subscribe(sales => {
    this.salesLength = sales.length;
   


    
    
    
  });
}

Transations() {
  this.transations$ = this.FinancialService.getOrdersService(true);
  this.transations$.subscribe(transactions => {
    this.total = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount.toString()), 0);
    this.ticket_m = this.total / transactions.length;
  });
}


tableSelect(){
  this.table


}


}

