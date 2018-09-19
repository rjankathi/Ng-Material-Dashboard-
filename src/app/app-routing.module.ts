import { TSheetsComponent } from './tsheets/tsheets.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTsheetComponent } from './tsheets/newtsheet/new-tsheet.component';
import { TsheetTemplateComponent } from './tsheets/tsheettemplate/tsheet-template.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"tsheets", component:TSheetsComponent },
  { path:"tsheets/:id",component:NewTsheetComponent },
  { path:"tsheets/new",component:NewTsheetComponent },
  { path:"tsheets/template",component:TsheetTemplateComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
