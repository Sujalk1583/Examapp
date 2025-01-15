import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MathsService } from '../maths.service';

@Component({
  selector: 'app-arrayex',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './arrayex.component.html',
  styleUrl: './arrayex.component.css'
})
export class ArrayexComponent 
{


  employee1:Employee=new Employee(1,'ajinkya',100000);

  employee2:Employee=new Employee(2,'harish',200000);

  employee3:Employee=new Employee(3,'vishal',300000);
  
  employees:Employee[]=[this.employee1,this.employee2,this.employee3];
 
  no:number=0;
  answer:number=0;

  constructor(private obj:MathsService)
  {

  }
  
  calculateCube()
  {
      this.answer=this.obj.calculateCube(this.no);
  }
  

}


export class Employee
{
  eid:number;
  name:string;
  salary:number;

  constructor(eid:number,name:string,salary:number)
  {
    this.eid=eid;
    this.name=name;
    this.salary=salary;
  }
}
