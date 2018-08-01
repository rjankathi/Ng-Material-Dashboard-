import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { speedDialFabAnimations } from './../speed-dial-fab-animations/speed-dial-fab-animations';
@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent implements OnInit {
  fabButtons = [
    // { icon: 'timeline'},
    // { icon: 'view_headline'},
    // { icon: 'room'},
    // { icon: 'lightbulb_outline'},
    // { icon: 'lock'}
    { text: 'New Timesheet'},
    { text: 'From Another Timesheet'},
    { text: 'From Template'},
    { text: 'From Project'}
  ];
  buttons = [];
  fabTogglerState = 'inactive';
  constructor(private router:Router) { }

  ngOnInit() {
   // this.buttons = this.fabButtons;
  }
  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
    this.on();
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
    this.off();
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems(); 
  }

  createTimesheet(text){
    if(text === "New Timesheet")
      this.router.navigate(['tsheets/new']);
  }

  on() {
    document.getElementById("overlay").style.display = "block";
  }

  off() {
    document.getElementById("overlay").style.display = "none";
    //this.fabTogglerState = 'inactive';
  }
}
