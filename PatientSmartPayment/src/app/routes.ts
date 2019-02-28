import {Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const appRoute:Routes=[
    {path:'login',component:LoginComponent ,pathMatch:'full'},
    {path:'home',component:HomeComponent ,pathMatch:'full'},
    {path:'', redirectTo:'/login', pathMatch:'full'}
    
];
