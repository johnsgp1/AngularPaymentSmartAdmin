import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../user'
import {NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly rootUrl='http://192.168.10.79:8080/portal/webresources/portal';
  constructor(private http:HttpClient) { }
  loginService(form:NgForm){
    const body : User ={
btSoftwareType:9,
iClinicId: "83622",
sDob: "",
sEmail: "",
sIPAddress: "",
sLoginTime: "",
sOTC: "",
sPassword: 'demo',
sPhoneNo: "",
sPin: "",
sUserName: 'demouser'   ,
   }
   return this.http.post(this.rootUrl+'/login',body)
  }
  
}
