import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthserviceService } from '../authentication/authservice.service';
@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ AuthserviceService ],
  declarations: [SigninComponent, RegisterComponent]
})
export class AuthenticationModule { }
