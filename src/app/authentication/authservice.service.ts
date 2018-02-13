import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthserviceService {

  constructor(private http:Http) { }

  login(email:string, password:string ) {
    return this.http.post('/api/login', {email, password})
     
}





}
