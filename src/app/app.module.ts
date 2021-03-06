import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { FooterComponent } from './footer/footer.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { TaskService } from './_services/task.service';
//import { GantComponent } from './dashboard/gant/gant.component';
import { GoogleChartsConfig, GoogleChartsModule, GOOGLE_CHARTS_LAZY_CONFIG } from 'angular-google-charts';
import { ReplaySubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { GanttComponent } from './gantt/gantt.component';
import { FullCalendarModule } from '@fullcalendar/angular';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { SchedulerComponent } from './scheduler/scheduler.component';
//import { GanttComponent } from './gantt/gantt.component';
//import { HttpClient } from '@angular/common/http';
//import { GanttComponent } from './gantt/gantt.component';

export const googleChartsConfigSubject = new ReplaySubject<GoogleChartsConfig>(1);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactViewComponent,
    FooterComponent,
    //GantComponent,
    GanttComponent,
    //SchedulerComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        NgbModule,
        GoogleMapsModule,
        GoogleChartsModule.forRoot({ version: 'current', mapsApiKey: ''}),
        HttpClientModule,
        //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
        FullCalendarModule,
    ],
  providers: [
    TaskService,
    {provide: GOOGLE_CHARTS_LAZY_CONFIG, useValue: googleChartsConfigSubject.asObservable()}


  ],
  bootstrap: [AppComponent],
  exports: [CoreModule, LoginComponent, ContactViewComponent, FooterComponent,]
})
export class AppModule { }
