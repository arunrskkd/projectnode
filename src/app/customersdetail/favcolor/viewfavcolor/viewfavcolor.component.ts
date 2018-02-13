import { Component, OnInit } from '@angular/core';
import { ColorservService } from '../colorserv.service';

@Component({
  selector: 'app-viewfavcolor',
  templateUrl: './viewfavcolor.component.html',
  styleUrls: ['./viewfavcolor.component.css']
})
export class ViewfavcolorComponent implements OnInit {
  result:any;
  constructor(private serv:ColorservService) { }

  ngOnInit() {
    this.serv.colors.subscribe((value:string) =>{
  
    })
  }
  onclick(index:number){
    this.serv.colorsub.next(index);
  }
}
