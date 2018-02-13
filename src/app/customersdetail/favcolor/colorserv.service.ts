import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ColorservService {
 colorsub = new Subject<number>();

 colors = new Subject<string>();
  constructor() { } 

}
