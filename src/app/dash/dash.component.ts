import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  // cards = [
  //   { title: 'Card 1', cols: 2, rows: 1 },
  //   { title: 'Card 2', cols: 1, rows: 1 },
  //   { title: 'Card 3', cols: 1, rows: 2 },
  //   { title: 'Card 4', cols: 1, rows: 1 }
  // ];
  breakpoint:number;cols:number;
 ngOnInit(){
   this.breakpoint = (window.innerWidth <= 400) ? 1: 4;
   console.log(this.breakpoint);
 }

 onResize(event){
  //  this.cards.forEach(q=>{
  //    if(q.cols >1 || q.cols >2){
  //      this.cols = 3;
  //      console.log("cols :" + this.cols);
  //    }else {
  //     this.cols =1;
      
  //     console.log("cols :" + this.cols);
  //    }
  //  });
  //  this.breakpoint = (event.target.innerWidth <= 414 
  //   || event.target.innerWidth <= 400) ? this.cols: 4;
  //  console.log(this.breakpoint);

   const element = event.target.innerWidth;
   console.log(element);


   if (element < 950) {
     this.breakpoint = 2;
   }

   if (element > 950) {
     this.breakpoint = 3;
   }

   if (element < 750) {
     this.breakpoint = 1;
   }
 }
  cards = [
    { title: 'Card 1', cols: 1, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 },
    { title: 'Card 5', cols: 3, rows: 3 },
    { title: 'Card 6', cols: 1, rows: 3 },
    //{ title: 'Card 7', cols: 4, rows: 3 }
  ];
}

//https://stackoverflow.com/questions/43891840/responsive-design-using-md-grid-list-in-angular-2/44846224#44846224