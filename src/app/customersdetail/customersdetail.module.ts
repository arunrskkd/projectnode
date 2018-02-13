import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersdetailRoutingModule } from './customersdetail-routing.module';
import { CustomeraddComponent } from './customeradd/customeradd.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { CustomerlistService } from './customerview/customerlist.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddserviceService } from '../customersdetail/customeradd/addservice.service'
import { AlertModule } from 'ngx-bootstrap';
import { CutomerfoneComponent } from './cutomerfone/cutomerfone.component';
import { CustomernumbereditComponent } from './customernumberedit/customernumberedit.component';
import { FavcolorComponent } from './favcolor/favcolor.component';
import { AddcolorComponent } from './favcolor/addcolor/addcolor.component';
import { ViewfavcolorComponent } from './favcolor/viewfavcolor/viewfavcolor.component';
import { ColorservService } from '../customersdetail/favcolor/colorserv.service';
import { AuthguardService } from '../customersdetail/authguard.service';
@NgModule({
  imports: [
    CommonModule,
    CustomersdetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
   
  ],
  declarations: [CustomeraddComponent, CustomerviewComponent, CutomerfoneComponent, CustomernumbereditComponent, FavcolorComponent, AddcolorComponent, ViewfavcolorComponent],
  providers: [ CustomerlistService,AddserviceService,ColorservService ,AuthguardService]
})
export class CustomersdetailModule { }
