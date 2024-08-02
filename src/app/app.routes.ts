import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"product",component:ProductComponent},
    {path:'Contact',component:ContactComponent},
    {path:'About',component:AboutComponent},
];
