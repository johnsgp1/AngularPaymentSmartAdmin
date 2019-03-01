import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  GetPaymentService(form:NgForm){
    alert(form);
  }
}
