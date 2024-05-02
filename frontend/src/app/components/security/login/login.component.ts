
import { modelLogin } from './../../../models/financial.model';
import { CommonModule } from '@angular/common';
import { LoginService } from './../../../service/login.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
  dataLogin$ = new Observable<modelLogin[]>;

  loginService = inject(LoginService)
  router = inject(Router)

  constructor() { }
  ngOnInit(): void {
    this.loginOn();

    
  }


  loginOn() {
    const loginData: modelLogin = {
      username: this.username,
      password: this.password
    };
  
    this.loginService.login(loginData).subscribe(response => {
      const data = response;
      if (data && data.access) {
        if (typeof window !== 'undefined' && localStorage !== null && localStorage !== undefined) {
          localStorage.setItem('token', data.access);
          this.router.navigate(['/caixa']);
        } else {
          console.log('localStorage não está disponível.');
          this.router.navigate(['/home']);
        }
      } 
    });
  }

}