import { Component, OnInit, Input } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-Dask-WorkingDOG',
  templateUrl: './nav-dask-working-dog.component.html',
  styleUrls: ['./nav-dask-working-dog.component.css']
})
export class NavDaskWorkingDOGComponent implements OnInit {

 @Input() usuario: any;
 @Input() isLogged;
 @Input() user$;
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() { }


}
