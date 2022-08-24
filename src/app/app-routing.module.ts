import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { CustomerInvoiceViewsComponent } from './customer-invoice-views/customer-invoice-views.component';

const routes: Routes = [
  { path: 'customer-invoice', component: CustomerInvoiceComponent },
  { path: 'customer-invoice-views', component: CustomerInvoiceViewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
