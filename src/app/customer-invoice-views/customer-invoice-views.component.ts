import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customer-invoice-views',
  templateUrl: './customer-invoice-views.component.html',
  styleUrls: ['./customer-invoice-views.component.scss']
})
export class CustomerInvoiceViewsComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  
  customers: any;

  ngOnInit(): void {

    
    this.getCustomers();
  }
  

  handleDelete(id: number) {
    this.customerService.DeleteCustomer("api/customer/" + id).subscribe((response: any) => {
      try {
        alert(response);
        this.getCustomers();
      } catch (error) {
        alert(error);
      }
    });

  }

  handleUpdate(id: number) {

  }

  getCustomers() {
    this.customerService.getCustomers("api/customer").subscribe((response: any) => {
      this.customers = response
      console.log(this.customers);

    });
  }

}
