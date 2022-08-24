import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoiceViewsComponent } from './customer-invoice-views.component';

describe('CustomerInvoiceViewsComponent', () => {
  let component: CustomerInvoiceViewsComponent;
  let fixture: ComponentFixture<CustomerInvoiceViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInvoiceViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInvoiceViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
