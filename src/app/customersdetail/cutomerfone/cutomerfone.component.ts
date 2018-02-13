import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerlistService } from '../customerview/customerlist.service';

@Component({
  selector: 'app-cutomerfone',
  templateUrl: './cutomerfone.component.html',
  styleUrls: ['./cutomerfone.component.css']
})
export class CutomerfoneComponent implements OnInit {
  customers:Customer[];
  phonedetails:{name:string,fone:number}={name:"",fone:null};
  customercontact:{name:string,fone:number}[]=[];
  constructor(private custlist:CustomerlistService
   
 ) {
    this.custlist.getdata().subscribe(
      (response)=>{
         console.log(response);
         this.customers = response; 
        }

    );
    this.custlist.recfone().subscribe(
      (response)=>{
         console.log(response);
         this.customercontact = response; 
        }

    );
  
   
   }

  ngOnInit() {
  }

  onsubmit(){
     this.customercontact.push(this.phonedetails);
     this.custlist.sendfon(this.phonedetails).subscribe(
      (response)=>{
         console.log(response);
         
        }

    );
  }



}
