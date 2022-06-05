import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{  HomePageComponent } from'./components/home-page/home-page.component';
import{ LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductPageComponent }from './components/product-page/product-page.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

const routes: Routes = [
  {path:'', component: HomePageComponent },
  {path:'landing', component: LandingPageComponent },
  {path: 'subscribe', component: SubscribeComponent },
  {path: 'product-page', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
