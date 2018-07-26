import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TSheetsComponent } from './tsheets/tsheets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,MatFormFieldModule,
         MatSelectModule, MatIconModule, MatListModule, MatGridListModule, 
         MatCardModule, MatMenuModule,MatChipsModule,MatTabsModule,
         MatTableModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatRadioModule,} from '@angular/material';
import { DashComponent } from './dash/dash.component';
import { NewTsheetComponent } from './tsheets/newtsheet/new-tsheet.component';
import { TsheetTemplateComponent } from './tsheets/tsheettemplate/tsheet-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TSheetsComponent,
    NavbarComponent,
    DashComponent,
    NewTsheetComponent,
    TsheetTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
