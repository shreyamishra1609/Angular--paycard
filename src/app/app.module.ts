import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
