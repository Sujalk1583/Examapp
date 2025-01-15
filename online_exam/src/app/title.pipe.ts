import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true
})
export class TitlePipe implements PipeTransform 
{

  transform(name:string,gender:string) : string 
  {
    if(gender=='male')
      return "Mr." + name;
    else
      return "Mrs." + name;
  }

}
