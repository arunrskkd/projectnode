import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Customer } from '../customer.model';
@Injectable()
export class AddserviceService {

  constructor(private http:Http) { }

  storeservers(servers:Customer){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/addcustomer',servers, options);
  }

}
