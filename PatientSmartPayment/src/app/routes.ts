import {Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component';

export const appRoute:Routes=[
    {path:'login',component:LoginComponent ,pathMatch:'full'},
    {path:'home',component:HomeComponent ,pathMatch:'full'},
    {path:'PaymentConfirmation',component:PaymentConfirmationComponent ,pathMatch:'full'},
    {path:'paymentResponse',component:PaymentResponseComponent ,pathMatch:'full'},
    
    {path:'', redirectTo:'/login', pathMatch:'full'}
    
];
