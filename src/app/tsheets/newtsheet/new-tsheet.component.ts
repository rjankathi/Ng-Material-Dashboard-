import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-new-tsheet.component',
  templateUrl: './new-tsheet.component.html',
  styleUrls: ['./new-tsheet.component.scss']
})
export class NewTsheetComponent implements OnInit {
  fromDate: any;
  toDate: any;
  datesArray: any;
  payPeriod:any;

  animal: string;
  name: string;

  constructor(private dialog:MatDialog  ) { }

  ngOnInit() {
    this.getFromToDates();
    // var dateArray = getDates(this.fromDate, this.toDate);
    // console.log(dateArray);
  }

  public getFromToDates() {

    var tDate = new Date();// get current date 
    var weekStart = new Date(tDate.setDate(tDate.getDate() - tDate.getDay()));
    var weekEnd = new Date(tDate.setDate(tDate.getDate() - tDate.getDay() + 6));
    console.log(`${weekStart.toISOString().split('T')[0]} - ${weekEnd.toISOString().split('T')[0]}`);

    this.fromDate = weekStart;
    this.toDate = weekEnd;
    this.payPeriod = `${this.fromDate.toLocaleString().split(',')[0]} - ${this.toDate.toLocaleString().split(',')[0]}`
    this.datesArray  = this.getDates(this.fromDate,this.toDate)
    //.toISOString().split('T')[0];
    //new Date().toISOString()
    // "2016-02-18T23:59:48.039Z"
    // new Date().toISOString().split('T')[0];
    // "2016-02-18"
    // new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/'); 
    // "2016/02/18"

    // new Date().toLocaleString().split(',')[0]
    // "2/18/2016"
  }

  private getDates(from_date, to_date) {
    var current_date = new Date(from_date);
    var end_date = new Date(to_date);
  
    var getTimeDiff = Math.abs(current_date.getTime() - end_date.getTime());
    var date_range = Math.ceil(getTimeDiff / (1000 * 3600 * 24)); // + 1;
  
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dates = new Array();
  
    for (var i = 0; i <= date_range; i++) {
      var getDate, getMonth = '';
  
      if (current_date.getDate() < 10) { getDate = ('0' + current_date.getDate()); }
      else { getDate = current_date.getDate(); }
  
      if (current_date.getMonth() < 9) {
        getMonth = ('0' + (current_date.getMonth() + 1));
      }
      else {
        getMonth = current_date.getMonth().toString();
      }
  
      var row_date = { day: getDate, month: getMonth, year: current_date.getFullYear() };
      var fmt_date = { weekDay: weekday[current_date.getDay()], date: getDate, month: months[current_date.getMonth()] };
      var is_weekend = false;
      if (current_date.getDay() == 0 || current_date.getDay() == 6) {
        is_weekend = true;
      }
      dates.push({ row_date: row_date, fmt_date: fmt_date, is_weekend: is_weekend });
      current_date.setDate(current_date.getDate() + 1);
    }
    return dates;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
              <h1 mat-dialog-title>Task Worked</h1>
              <div mat-dialog-content style="width:100%">
                <mat-form-field>
                  <textarea matInput [(ngModel)]="data.animal"></textarea>
                </mat-form-field>
              </div>
              <div mat-dialog-actions style="width:100%">
                <button mat-button (click)="onNoClick()">Cancel</button>
                <button mat-raised-button color="primary" [mat-dialog-close]="data.animal" cdkFocusInitial>Post</button>
              </div>
               `,
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}