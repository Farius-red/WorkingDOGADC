import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';


@Component({
  selector: 'app-daskboard',
  templateUrl: './daskboard.component.html',
  styleUrls: ['./daskboard.component.css']
})
export class DaskboardComponent implements OnInit {

  // tslint:disable-next-line:typedef-whitespace
  public isLogged = false;
  public usuario: any;
  public user$: Observable<any> = this.authSvc.auth.user;

  constructor(private authSvc: AuthService) {

  }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    //  try {
    //
    //     this.usuario = await this.authSvc.getCurrentUser();
    //     if (this.usuario){
    //       this.isLogged = true;
    //     }
    //
    //   } catch (error) {
    //     console.log(error);
    //   }
    //  }
  }
}
