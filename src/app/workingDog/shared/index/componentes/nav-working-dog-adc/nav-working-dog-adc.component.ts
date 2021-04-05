import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navWorkingDOG',
  templateUrl: './nav-working-dog-adc.component.html',
  styleUrls: ['./nav-working-dog-adc.component.css']
})
export class NavWorkingDogADCComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
