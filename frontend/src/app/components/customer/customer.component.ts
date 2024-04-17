import { FinancialService } from './../../service/financial.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { modelBox } from '../../models/financial.model';

@Component({

  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  name = '';
  data$ = new Observable<modelBox[]>;

  constructor(private FinancialService: FinancialService){}
  
  ngOnInit(): void {
    this.getUser();  
  }
  
  
  
  
  

  getUser() {
    this.FinancialService.obterDadosFinanceiros().subscribe((response: any[]) => {
      if (response.length > 0) {
        this.name = response[0].user.first_name;
        console.log('Oi,', this.name);
      } else {
        console.log('Nenhum dado financeiro encontrado.');
      }
    });
  }

}
