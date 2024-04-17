import { FinancialService } from './../../../service/financial.service';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CarddashComponent } from '../../cards/carddash/carddash.component';
import { TableComponent } from '../../table/table.component';
import { LineChartComponent } from '../../line-chart/line-chart.component';
import { TableFinancialComponent } from '../table-financial/table-financial.component';
import { Observable } from 'rxjs';
import { modelBox } from '../../../models/financial.model';

@Component({
  selector: 'app-cashbox',
  standalone: true,
  imports: [SidebarComponent,CarddashComponent, TableComponent, LineChartComponent, TableFinancialComponent,],
  templateUrl: './cashbox.component.html',
  styleUrl: './cashbox.component.css'
})
export class CashboxComponent {

  data$ = new Observable<modelBox[]>;


  constructor(private FinancialService: FinancialService){}
  
  
  ngOnInit(): void {
   
    
  }
  


}
