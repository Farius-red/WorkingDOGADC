import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListaAdiestramientoDataSource, ListaAdiestramientoItem } from './lista-adiestramiento-datasource';

@Component({
  selector: 'lista-Adiestramiento',
  templateUrl: './lista-adiestramiento.component.html',
  styleUrls: ['./lista-adiestramiento.component.css']
})
export class ListaAdiestramientoComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ListaAdiestramientoItem>;
  dataSource: ListaAdiestramientoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ListaAdiestramientoDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
