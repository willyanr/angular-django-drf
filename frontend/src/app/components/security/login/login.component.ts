import { FinancialService } from './../../../service/financial.service';
import { LocalStorageService } from 'angular-web-storage';
import { routes } from './../../../app.routes';
import { modelLogin, modelBox } from './../../../models/financial.model';
import { CommonModule } from '@angular/common';
import { LoginService } from './../../../service/login.service';
import { Component } from '@angular/core';
import { Route, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { response } from 'express';
import { Token } from '@angular/compiler';
import test from 'node:test';
import { get } from 'http';
import { access } from 'fs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    FormsModule,
  
  
  
  
  ],
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})




export class LoginComponent {
  username = '';
  password = '';

  data$ = new Observable<modelBox[]>;
  dataLogin$ = new Observable<modelLogin[]>;

  constructor(private loginService: LoginService, private router: Router, private FinancialService: FinancialService) { }
  ngOnInit(): void {
 

    
  }

  getData() {

    this.data$ = this.FinancialService.obterDadosFinanceiros(); 
    this.data$.subscribe(data => {
      let teste = data

  
  
  
    })
  }
  
  loginOn() {
    const loginData: modelLogin = {
      username: this.username,
      password: this.password
    };

    this.loginService.login(loginData).subscribe(response => {
      const data = response;
      if (data && data.access) {
        let token = localStorage.setItem('token', data.access);
        this.router.navigate(['/caixa']);
      } else {

        this.router.navigate(['/login']);
      }
    });
  }
}

