import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model'
import { AddserviceService } from './addservice.service';
import { Input } from '@angular/core/src/metadata/directives';
@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  customers: Customer = { name: '', address: '' };
  constructor(private custserv: AddserviceService) { }

  ngOnInit() {
  }
  onsubmit() {
    this.custserv.storeservers(this.customers).subscribe(

      (response) => {
        console.log(response.json().message);
        this.add();
        this.customers = { name: '', address: '' };
      },
      (error) => { console.log(error) }
    );
  }
  
  alerts: any = [];
  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `succesfully added customer  ${this.customers.name}`,
      timeout: 3000
    });
  }
}
