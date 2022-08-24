import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { CustomerInvoiceViewsComponent } from './customer-invoice-views/customer-invoice-views.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CustomerInvoiceComponent,
    CustomerInvoiceViewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
