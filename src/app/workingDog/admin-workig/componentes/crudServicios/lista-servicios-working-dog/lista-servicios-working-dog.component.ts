import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListaServiciosWorkingDogDataSource, ListaServiciosWorkingDogItem } from './lista-servicios-working-dog-datasource';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lista-servicios-WorkingDog',
  templateUrl: './lista-servicios-working-dog.component.html',
  styleUrls: ['./lista-servicios-working-dog.component.css']
})
export class ListaServiciosWorkingDogComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ListaServiciosWorkingDogItem>;
  dataSource: ListaServiciosWorkingDogDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'servicio', 'nombreCliente', 'estado', ];

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataSource = new ListaServiciosWorkingDogDataSource();
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
