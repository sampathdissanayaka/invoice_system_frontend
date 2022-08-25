import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  ApiUrl: string = "https://localhost:44309/";

  getCustomer(endpoint: string){
    return this.http.get(this.ApiUrl + endpoint); 
  }

  getCustomers(endpoint: string){
    console.log(this.ApiUrl + endpoint);
    return this.http.get(this.ApiUrl + endpoint);
  }
  InsertCustomers(endpoint:string, requestBody: any){
    return this.http.post(this.ApiUrl + endpoint, requestBody);
  }
  UpdateCustomer(endpoint:string, requestBody:any){
    return this.http.put(this.ApiUrl + endpoint, requestBody);
  }
  DeleteCustomer(endpoint:string){
    return this.http.delete(this.ApiUrl + endpoint);
  }
}
