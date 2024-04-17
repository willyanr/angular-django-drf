import { modelLogin } from './../models/financial.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://127.0.0.1:8000/api/token/'



  constructor(private httpClient: HttpClient) { }

  login(login: modelLogin): Observable<modelLogin> {
    return this.httpClient.post<modelLogin>(this.apiUrl, login).pipe(
      shareReplay()
    );
  }

}