import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheticationComponent } from './authetication/authetication.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'auth', component: AutheticationComponent},
  {path: 'auth/home' , pathMatch: 'full', component: HomeComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
