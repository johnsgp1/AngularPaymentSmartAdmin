import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../shared/loginService/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private routes:Router) { }

  ngOnInit() {
  }
  GetLoginService(forms:NgForm){
  var a =forms.value;
  this.loginService.loginService(forms.value)
  .subscribe((data:any)=>{
    if(data!==null){
      this.routes.navigate(['/home']);
      window.location.reload();
      //this.routes.navigate(['/paymentResponse'])
      
     }
   });
  }
}
