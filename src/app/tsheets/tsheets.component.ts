import { Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatSort, MatTableDataSource, matTabsAnimations, MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './tsheets.component.html',
  styleUrls: ['./tsheets.component.scss'],
  animations:[matTabsAnimations.translateTab]
})

export class TSheetsComponent implements OnInit {
  exp = false;
  tsheettypes =[
    {value:'new-0',viewValue:'New Timesheet'},
    {value:'from-timesheet-1',viewValue:'From Another Timesheet'},
    {value:'from-template-2',viewValue:'From Template'},
    {value:'from-project-2',viewValue:'From Project'},
  ];
  
 tsData = [
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

// var from = new Date('07/08/2018');
// var to = new Date('07/14/2018');
//days = diffDays(new Date('07/08/2018'),new Date('07/14/2018'));
 dueData = [
  {
    jobCode:'JCODE-566',
    jobTitle:'Full stack dev',
    endClient:'Fox',
    totalHoursMissing:'56', 
    missingDates:10
  }];

  displayedColumns: string[] = ['id', 'endclient', 'from', 'to','totalhours','billablehours','status','attachment','submittedon','actions'];
  dueColumns :string[] = ['jobCode','jobTitle','endClient','totalHoursMissing','missingDates'];
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  public createTSheet(event:MatSelectChange,type:any){
    if(event.source.selected){
      if(type.viewValue === "New Timesheet")
        this.router.navigate(['tsheets/new']);
      console.log("You selected: ", type);
    }
  }

  tsDataSource = new MatTableDataSource(this.tsData);
  dueDataSource = new MatTableDataSource(this.dueData);
  @ViewChild(MatSort) sort: MatSort;
  
}

