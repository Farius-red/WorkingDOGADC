import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'menu-Admin-WorkingDog',
  templateUrl: './menu-admin-working-dog.component.html',
  styleUrls: ['./menu-admin-working-dog.component.css']
})
export class MenuAdminWorkingDogComponent implements OnInit{

  public isLogged = false;


  constructor(private authSvc: AuthService) { }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    console.log('navBArModulos');
    const user = await this.authSvc.getCurrentUser();
    if (user){
      this.isLogged = true;
      console.log('User', user);
    }
  }

}
