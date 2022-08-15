import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheticationComponent } from './authetication/authetication.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpcomingDrivesComponent } from './upcoming-drives/upcoming-drives.component';

const routes: Routes = [
  {path: '', component: AutheticationComponent},
  {path: 'navbar' , component: NavbarComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'upcoming_drive' , component: UpcomingDrivesComponent},
  {path: 'my_drive' , component: HomeComponent},
  {path: 'contact_us' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
