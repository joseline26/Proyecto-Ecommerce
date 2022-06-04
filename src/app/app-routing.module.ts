import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{  HomePageComponent } from'./Components/home-page/home-page.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
{path: '' , component: HomePageComponent },
{path: 'productlist', component: ProductListComponent },
{path: 'subscribe', component: SubscribeComponent },
{path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
