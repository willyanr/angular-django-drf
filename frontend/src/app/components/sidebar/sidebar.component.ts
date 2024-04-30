import { FinancialService } from './../../service/financial.service';
import { ProfileService } from './../../service/profile.service';
import { LoginService } from './../../service/login.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Route, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { modelProfile } from '../../models/financial.model';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  activeItem: string = 'financeiro';
  profile$ = new Observable<modelProfile[]>;
  profileService = inject(FinancialService)


  constructor(private LoginService: LoginService, private router: Router, private ProfileService: ProfileService){}
  ngOnInit(): void {
    this.isActive('');
    this.accessProfile();

    
  }
  logout(){
    localStorage.removeItem('token')
    console.log('token sumiu')
    this.router.navigate(['/login']);


  }

isActive(item: string): boolean {

    return this.activeItem === item;
}

accessProfile() {
  if (typeof window !== 'undefined' && localStorage !== null) {
    let token = localStorage.getItem('token');
    if (token !== null) {
      this.profile$ = this.profileService.getProfile();
      this.profile$.subscribe(response => {

      });
    } else {
      console.log('Token não encontrado. Acesso não autorizado.');
    }
  } else {
    console.log('localStorage não está disponível.');
  }
}
}
