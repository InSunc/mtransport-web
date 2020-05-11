import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
// import { MqttModule, IMqttServiceOptions } from "ngx-mqtt";
import { RoutesListComponent } from './components/routes-list/routes-list.component';
import { StatisticsViewComponent } from './components/statistics-view/statistics-view.component';
// export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//   hostname: '192.168.100.7',
//   port: 1883,
// }


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    RoutesListComponent,
    StatisticsViewComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    GoogleMapsModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    // MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
