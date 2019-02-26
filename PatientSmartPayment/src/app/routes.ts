import {Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';

export const appRoute:Routes=[
    {path:'login',component:LoginComponent ,pathMatch:'full'},
    {path:'', redirectTo:'/login', pathMatch:'full'}
    
];
