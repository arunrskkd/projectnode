import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomeraddComponent } from './customeradd/customeradd.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { CutomerfoneComponent } from './cutomerfone/cutomerfone.component';
import { CustomernumbereditComponent } from './customernumberedit/customernumberedit.component';
import { FavcolorComponent } from './favcolor/favcolor.component';
import { AuthguardService } from './authguard.service';
const routes: Routes = [
  { path: '', component: CustomeraddComponent ,},
  { path: 'customeradd', component: CustomeraddComponent },
  { path: 'customerview', component: CustomerviewComponent,canActivate:[AuthguardService] },
  { path: 'customerfone', component: CutomerfoneComponent },
  { path: 'custnumbedit/:id', component: CustomernumbereditComponent },
  { path: 'favcolor', component: FavcolorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersdetailRoutingModule { }
