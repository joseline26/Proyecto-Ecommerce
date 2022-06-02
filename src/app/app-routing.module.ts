import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{  HomePageComponent } from'./components/home-page/home-page.component';
import{ LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent },
  {path:'landing', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
