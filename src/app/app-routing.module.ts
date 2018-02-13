import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'customerdetail',
    loadChildren: 'app/customersdetail/customersdetail.module#CustomersdetailModule'
  },
  {
    path: 'customersalary',
    loadChildren: 'app/customersalary/customersalary.module#CustomersalaryModule'
  },
  {
    path: 'authentication',
    loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
  },
  { path: '**', redirectTo: 'customerdetail' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
