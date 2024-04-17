import { ProfileService } from './../../service/profile.service';
import { LoginService } from './../../service/login.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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



  constructor(private LoginService: LoginService, private router: Router, private ProfileService: ProfileService){}
  ngOnInit(): void {
    this.isActive('');
    this.accessProfile();
    console.log(this.profile$)
    
  }
  logout(){
    localStorage.removeItem('token')
    console.log('token sumiu')
    this.router.navigate(['/login']);


  }

isActive(item: string): boolean {

    return this.activeItem === item;
}

accessProfile(){

  this.profile$ = this.ProfileService.getProfile();
  this.profile$.subscribe(response => {
    console.log('opaaaaaaaaaaaaaaa', response)

  })


}


}
