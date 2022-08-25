import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.scss']
})
export class CustomerInvoiceComponent implements OnInit {

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  customerName: string = "";
  date: string = "";
  productId: number = 0;
  productQualityId: number = 0;
  discount: number = 0;
  totalAmount: number = 0;
  customer:any;

  id: string = "";

  ngOnInit(): void {
    this.setId(this.route.snapshot.paramMap.get('id'));
  }

  handleSelectProduct(event: any) {
    this.productId = event.target.value;
  }

  setId(id: any) {
    this.id = id;
    console.log(this.id);
    if(id){
      this.getCustomer(id);
    }
  }

  handleSubmit() {
    let requestBody = {
      "CustomerName": this.customerName,
      "TransactionDate": this.date,
      "ProductId": this.productId,
      "ProductQualityId": this.productQualityId,
      "Discount": this.discount,
      "TotalAmount": this.totalAmount
    }
    console.log(requestBody);
    this.customerService.InsertCustomers("api/customer", requestBody).subscribe((response: any) => {
      try {
        alert(response);
        this.clear();
      } catch (error) {
        alert(error);
      }
    });
  }

  getCustomer(id:any) {
    this.customerService.getCustomer("api/customer/" + id).subscribe((response: any) => {
      console.log(response);
      this.customerName = response[0].CustomerName;
      console.log(response.CustomerName);
      console.log(this.customerName)
      this.date = response[0].TransactionDate;
      this.productId = response[0].ProductId;
      this.productQualityId = response[0].ProductQualityId;
      this.discount = response[0].Discount;
      this.totalAmount = response[0].TotalAmount;

    });
  }


  clear() {
    this.customerName = "";
    this.date = "";
    this.productId = 0;
    this.productQualityId = 0;
    this.discount = 0;
    this.totalAmount = 0;
  }
  


}


