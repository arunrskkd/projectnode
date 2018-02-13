import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerlistService } from '../customerview/customerlist.service';
@Component({
  selector: 'app-customernumberedit',
  templateUrl: './customernumberedit.component.html',
  styleUrls: ['./customernumberedit.component.css']
})
export class CustomernumbereditComponent implements OnInit {
  customers:Customer[];
  phonedetails:{_id:any,name:string,fone:number}={_id:1,name:"arun",fone:1};
  
  customercontact:{name:string,fone:number}[]=[];
  constructor( private route: ActivatedRoute,
    private router: Router,private custlist:CustomerlistService) {
      var id = this.route.snapshot.paramMap.get('id');
      console.log(id);

      this.custlist.getdata().subscribe(
        (response)=>{
          //  console.log(response);
           this.customers = response; 
          }
  
      );
      this.custlist.recfoneedit(id).subscribe(
        (response)=>{
            console.log(response);
           this.phonedetails = response[0]; 
           console.log(this.phonedetails);
          }
  
      );
     }

  ngOnInit() {
  }

  onsubmit(){
  
    this.custlist.sendfonedit(this.phonedetails).subscribe(
     (response)=>{
        console.log(response);
        this.alerted();
       }

   );
 }

 alerts: any = [];
 alerted(): void {
   this.alerts.push({
     type: 'info',
     msg: `succesfully updated customer `,
     timeout: 3000
   });
 }

}
