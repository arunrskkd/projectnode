import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinform:FormGroup;
  constructor(private service:AuthserviceService,private router:Router) { }

  ngOnInit() {

    this.initform();
  }

  private initform(){
    this.signinform = new FormGroup({
      'email':new FormControl('asd'),
      'password':new FormControl('password',Validators.required)
    });
  }

  onSubmit(){
    
    if(this.signinform.get('email').value && this.signinform.get('password').value){
      console.log(this.signinform.get('email').value);
    console.log(this.signinform.value.email);
      this.service.login(this.signinform.get('email').value,this.signinform.get('password').value).subscribe(
        (resp) => {   console.log("User is logged in");
      
        this.router.navigateByUrl('/');
      }

      );
    }
    else{
      alert("please fill the fields")
    }
   
  }

}
