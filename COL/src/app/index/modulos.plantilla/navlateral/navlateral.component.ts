import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.css']
})
export class NavlateralComponent implements OnInit {
 public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
