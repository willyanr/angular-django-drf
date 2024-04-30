
import { Component, } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  transactions: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/transactions/')
      .subscribe(data => {
        this.transactions = data;
      });
  }
}