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
  customer: any;

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
    if (id) {
      this.getCustomer(id);
    }
  }

  handleSubmit() {
    
    if(!this.id){
      let requestBodyInsert = {
        "CustomerName": this.customerName,
        "TransactionDate": this.date,
        "ProductId": this.productId,
        "ProductQualityId": this.productQualityId,
        "Discount": this.discount,
        "TotalAmount": this.totalAmount
      }
      this.customerService.InsertCustomers("api/customer", requestBodyInsert).subscribe((response: any) => {
        try {
          alert(response);
          this.clear();
        } catch (error) {
          alert(error);
        }
      });

    }else{
      let requestBodyUpdate = {
        "Id":this.id,
        "CustomerName": this.customerName,
        "TransactionDate": this.date,
        "ProductId": this.productId,
        "ProductQualityId": this.productQualityId,
        "Discount": this.discount,
        "TotalAmount": this.totalAmount
      }
      this.customerService.UpdateCustomer("api/customer", requestBodyUpdate).subscribe((response: any) => {
        try {
          alert(response);
          this.clear();
        } catch (error) {
          alert(error);
        }
      });

    }
    
  }

 
  getCustomer(id: any) {
    this.customerService.getCustomer("api/customer/" + id).subscribe((response: any) => {
      // console.log(response);
      this.customer = response[0];
      this.customerName = this.customer.CustomerName;
      // console.log(response.CustomerName);
      // console.log(this.customerName)
      this.date = this.customer.TransactionDate;
      this.productId = this.customer.ProductId;
      this.productQualityId = this.customer.ProductQualityId;
      this.discount = this.customer.Discount;
      this.totalAmount = this.customer.TotalAmount;

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


