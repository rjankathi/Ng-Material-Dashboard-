import {Injectable} from '@angular/core';
import {DueSheetData } from '../models/tsheet';
@Injectable()

export class UtilService{
    fromDate: any;
    toDate: any;
    datesArray: any;
    payPeriod:any;

    getFromToDates():any {

        var tDate = new Date();// get current date 
        var weekStart = new Date(tDate.setDate(tDate.getDate() - tDate.getDay()));
        var weekEnd = new Date(tDate.setDate(tDate.getDate() - tDate.getDay() + 6));
        console.log(`${weekStart.toISOString().split('T')[0]} - ${weekEnd.toISOString().split('T')[0]}`);
    
        this.fromDate = weekStart;
        this.toDate = weekEnd;
        this.payPeriod = `${this.fromDate.toLocaleString().split(',')[0]} - ${this.toDate.toLocaleString().split(',')[0]}`
        this.datesArray  = this.getDates(this.fromDate,this.toDate);
        return this.payPeriod;
      }
      
      previousWeek(){

      }

      currentWeek(){

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
}