import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutheticationComponent } from './authetication/authetication.component';
import { HomeComponent } from './home/home.component';
import { NavbarService } from './navbar.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UpcomingDrivesComponent } from './upcoming-drives/upcoming-drives.component';


@NgModule({
  declarations: [
    AppComponent,
    AutheticationComponent,
    HomeComponent,
    NavbarComponent,
    UpcomingDrivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
