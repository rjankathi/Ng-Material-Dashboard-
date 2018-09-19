import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
         MatTableModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatRadioModule,MatDialogModule,} from '@angular/material';
import { DashComponent } from './dash/dash.component';
import { NewTsheetComponent,DialogOverviewExampleDialog } from './tsheets/newtsheet/new-tsheet.component';
import { TsheetTemplateComponent } from './tsheets/tsheettemplate/tsheet-template.component';
import { SpeedDialFabComponent } from './shared/speed-dial-fab/speed-dial-fab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TSheetsComponent,
    NavbarComponent,
    DashComponent,
    NewTsheetComponent,
    DialogOverviewExampleDialog,
    TsheetTemplateComponent,
    SpeedDialFabComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    MatRadioModule,
    MatDialogModule,
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
