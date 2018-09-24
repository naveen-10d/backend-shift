import { Component, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Zipcodeservice } from './table.service';
// import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns = ['ID', 'PercentSpread', 'Address', 'City', 'SubDivisionName', 'County', 'PostalCode', 'ListPrice', 'SqFtHead', 'LegalDescription', 'TaxID', 'PropertyKey', 'UserAction', 'Year', 'Status'];
  dataSource = new MatTableDataSource();
  private selected: any;
  private selectedcity: any = [];
  private selectedstate: any;
  private selectedcode : any;
  constructor(private zip: Zipcodeservice, ) {
  }

  statechange(selected) {
    this.selectedstate = selected.value;
    this.cities();
  }

  citychange(selected) {
    this.selectedcity = selected.value;
    this.codes();
    this.Table();
  }

  zipcodechange(selected) {
    this.selectedcode = selected.value
    this.Table();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.States();
    // this.codes();
    // this.Table();
    // this.cities();
  }
  private cityvalue = []
  private zipcodelist = []
  private tablelist = []
  private states = []

  States() {
    this.zip.getState().subscribe(statevalue => {
      this.states = statevalue;
    })
  }

  cities() {
    this.zip.getAllCity().subscribe(citydata => {
      if (this.selectedstate === 'FLORIDA') {
        this.cityvalue = citydata;
      }
    });
  }

  codes() {
    this.zip.getAllzipcode(this.selectedcity.city).subscribe(data => {
        this.zipcodelist = data;
    });
  }

  Table() {
    this.zip.getAlltablevalue(this.selectedcity.city,this.selectedcode).subscribe(datatable => {
      if (this.selectedcity.city !== "" && this.selectedstate !== ""){
      this.tablelist = datatable;
      this.dataSource = new MatTableDataSource(this.tablelist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      }
    });
  }

}
export interface Element {
  Address: string;
  PercentSpread: number;
  City: string;
  SubDivisionName: string;
  County: string;
  PostalCode: number;
  ListPrice: number;
  SqFtHead: number;
}

