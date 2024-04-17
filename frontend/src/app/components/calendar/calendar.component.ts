import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Provider } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@Component({
  
  selector: 'app-calendar',
  standalone: true,
  imports: [MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
   
    
  
  
  
  
  
  
  
  
  
  ],
  
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [provideNativeDateAdapter()],
  
})
export class CalendarComponent {

}
