import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersalaryComponent } from './customersalary/customersalary.component';
const routes: Routes = [
  { path: 'viewsalary', component: CustomersalaryComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersalaryRoutingModule { }
