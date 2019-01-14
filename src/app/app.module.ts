import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { ChartModule, ChartComponent } from 'angular2-highcharts';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import { DatePipe } from './date.pipe';

let routes = [
  {path:'dashboard', component:DashBoardComponent},
  {path:'', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ChartComponent,
    HomeComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ChartModule.forRoot(require('highcharts')),
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HighchartsStatic,
    useValue: highcharts
}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
