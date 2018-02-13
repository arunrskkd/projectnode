import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersalaryRoutingModule } from './customersalary-routing.module';
import { CustomersalaryComponent } from './customersalary/customersalary.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersalaryRoutingModule
  ],
  declarations: [CustomersalaryComponent]
})
export class CustomersalaryModule { }
