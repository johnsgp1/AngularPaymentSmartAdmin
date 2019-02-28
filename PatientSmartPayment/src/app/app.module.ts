import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {appRoute} from './routes';
import {FormsModule} from '@angular/forms';
import {LoginService} from './shared/loginService/login.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaymentConfirmationComponent,
    PaymentResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
