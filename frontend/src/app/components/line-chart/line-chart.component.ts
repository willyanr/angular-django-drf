import { Observable } from 'rxjs';
import { FinancialService } from './../../service/financial.service';
import { Component, Input } from "@angular/core";
import { modelBox } from '../../models/financial.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {

  data$ = new Observable<modelBox[]>;
  totalBalance: number = 0
  constructor(private FinancialService: FinancialService){}

  ngOnInit(): void {
   this. getData();
    
  }
  

  getData() {
    this.data$ = this.FinancialService.getBoxListFull();
    this.data$.subscribe(response => {
      let data = response;
      console.log('oiiiiiiiiiiiii',data);


      this.totalBalance = data.reduce((total, box) => {
        if (typeof box.total_balance === 'number') {
          return total + box.total_balance;
        } else if (typeof box.total_balance === 'string') {
          return total + parseFloat(box.total_balance);
        } else {
          return total;
        }
      }, 0);
      console.log('Total balance:', this.totalBalance);
    });
  }







}

