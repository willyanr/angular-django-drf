import { CarddashComponent } from './../cards/carddash/carddash.component';
import { FinancialService } from './../../service/financial.service';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { modelBox, modelOrders, modelTransations } from '../../models/financial.model';
import { threadId } from 'worker_threads';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { stat } from 'fs';







@Component({
  selector: 'app-ordertable',
  standalone: true,
  imports: [CarddashComponent,FormsModule, CommonModule],
  templateUrl: './ordertable.component.html',
  styleUrl: './ordertable.component.css'
})
export class OrdertableComponent {
statusIconClass: string = '';
statusIconColor: string = '';


selectedTransactionId: number | null = null;
isChecked: boolean = false;



tableFromCarddash: string = 'Mesa';
  status = '';
  data$ = new Observable<modelOrders[]>;
  

  constructor(private FinancialService: FinancialService){}


  ngOnInit(): void {
    this.TestBed();

    
  }

  
  TestBed(){
    this.data$ = this.FinancialService.getOrdersService(true);
    this.data$.subscribe(data => {
    });
  }

  saveSelectedTransactionId(transactions: modelTransations): void {
    if (this.isChecked) {
      this.selectedTransactionId = transactions.id!;
    } else {
      this.selectedTransactionId = null;
    }
  }

}



