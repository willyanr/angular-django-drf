
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { modelProfile } from '../models/financial.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://127.0.0.1:8000/api/profile/'



  constructor(private httpClient: HttpClient) { }


  getProfile(): Observable <modelProfile[]> {
    
    return this.httpClient.get<modelProfile[]>(this.apiUrl);


  }
 

}