import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer.model';
import { CustomerlistService } from '../../customerview/customerlist.service';
import { ElementRef } from '@angular/core';
import { ColorservService } from '../colorserv.service';
import { Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addcolor',
  templateUrl: './addcolor.component.html',
  styleUrls: ['./addcolor.component.css']
})
export class AddcolorComponent implements OnInit,OnDestroy {
  colors:string[]=['red','green','black'];
  mix:string[]=['red','green','black'];
  customers:Customer[];
  rows:any[]=[];
  subs:Subscription;
  addmoreForm:FormGroup;
  constructor(private custlist:CustomerlistService,private elementRef:ElementRef,private serv:ColorservService) { 

    this.custlist.getdata().subscribe(
      (response)=>{
         console.log(response);
         this.customers = response; 
        }

    );
  }

  ngOnInit() {
    this.subs = this.serv.colorsub.subscribe(
      (index:number) => { alert(index) }

    );
    this.iniform();
  }

  private iniform(){
    let keywordarray = new FormArray([]);
    for(let key of this.mix){
      keywordarray.push(new FormGroup({
        'keys': new FormControl(key)
      }))
    }
  


    this.addmoreForm = new FormGroup({
      'name': new FormControl('arun',Validators.required),
      'color': new FormControl('red',Validators.required),
     'keywords': keywordarray
    });
  }

 
    ngOnDestroy(){
      this.subs.unsubscribe();
    }
    onSubmit(){
      
      this.serv.colors.next(JSON.stringify(this.addmoreForm.value));
    }
    onaddingridient(){
     (<FormArray> this.addmoreForm.get('keywords')).push(
      new FormGroup({
        'keys':new FormControl()
      }
      )


     );
    }
    onremove(index:number){
      (<FormArray>this.addmoreForm.get('keywords')).removeAt(index);
    }

}
