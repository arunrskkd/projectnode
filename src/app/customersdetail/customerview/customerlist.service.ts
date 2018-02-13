import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class CustomerlistService {
   constructor(private http:Http) {



   }
   getdata(){
    return this.http.get('api/details').map((response:Response)=>{
      return response.json();
    });
  }
  deldata(name:string){
    return this.http.get('api/del/'+ name).map((response:Response)=>{
      return response.json();
    });
  }
  sendfon(servers:{}){
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/addcustomerfone',servers, options);

      
    
  }
  sendfonedit(servers:{}){
    let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this.http.post('api/addcustomerfoneedit',servers, options);

     
   
 }
  recfone(){
    return this.http.get('api/fonedetails').map((response:Response)=>{
      return response.json();
    });
  }
  recfoneedit(cusname:string){
    return this.http.get('api/fonedetailsedit/'+cusname).map((response:Response)=>{
      return response.json();
    });
  }
}
