import { Component, inject } from '@angular/core';
import { FinancialService } from '../../../service/financial.service';
import { Observable } from 'rxjs';
import { modelOrders } from '../../../models/financial.model';

@Component({
  selector: 'app-model-order',
  standalone: true,
  imports: [],
  templateUrl: './model-order.component.html',
  styleUrl: './model-order.component.css'
})
export class ModelOrderComponent {
  private service = inject(FinancialService);
  data$ = new Observable<modelOrders[]>;


  getOrders(){
    this.data$ = this.service.getOrdersService(false);
    this.data$.subscribe(order => {
      
      


    })


  }




}


