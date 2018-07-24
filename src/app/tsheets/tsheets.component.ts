import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
var tsData = [
  {id: 1,endclient:'Fox',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Pending',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 2,endclient:'Tcs',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Pending',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 3,endclient:'Apple',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Approved',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 4,endclient:'Microsoft',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Pending',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 5,endclient:'Adobe',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Approved',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 6,endclient:'Amazon',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Pending',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 7,endclient:'Snapchat',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Approved',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 8,endclient:'FB',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Pending',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 9,endclient:'Tinder',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Approved',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
  {id: 10,endclient:'Uber',from:'07/08/2018',to:'07/14/2018',totalhours:8,billablehours:8,status:'Pending',attachment:'RA-07082018',submittedon:'07/16/2018',actions:'edit'},
];
var from = new Date('07/08/2018');
var to = new Date('07/14/2018');
var days = diffDays(from,to);
var dueData = [
  {
    jobCode:'JCODE-566',
    jobTitle:'Full stack dev',
    endClient:'Fox',
    totalHoursMissing:'56', 
    missingDates:days
  }];

@Component({
  selector: 'app-posts',
  templateUrl: './tsheets.component.html',
  styleUrls: ['./tsheets.component.scss']
})

export class TSheetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles = [
    {text: 'Shiba', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Doggy', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Dog', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Doggo', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Doge', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Some Dog', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Text', cols: 1, rows: 2, color: '#DDBDF1'},
  ];

  diffDays(d1, d2)
  {
    var ndays;
    var tv1 = d1.valueOf();  // msec since 1970
    var tv2 = d2.valueOf();
  
    ndays = (tv2 - tv1) / 1000 / 86400;
    ndays = Math.round(ndays - 0.5);
    return ndays;
  }
  displayedColumns: string[] = ['id', 'endclient', 'from', 'to','totalhours','billablehours','status','attachment','submittedon','actions'];
  dueColumns :string[] = ['jobCode','jobTitle','endClient','totalHoursMissing','missingDates'];
  tsDataSource = new MatTableDataSource(tsData);
  dueDataSource = new MatTableDataSource(dueData);
  @ViewChild(MatSort) sort: MatSort;
  
}

function diffDays(d1, d2)
{
  var ndays;
  var tv1 = d1.valueOf();  // msec since 1970
  var tv2 = d2.valueOf();

  ndays = (tv2 - tv1) / 1000 / 86400;
  ndays = Math.round(ndays - 0.5);
  return ndays;
}
