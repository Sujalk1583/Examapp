import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  constructor() { }

  calculateCube(no:number)
  {
    return no*no*no;
  }

}
