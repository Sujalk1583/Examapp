import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {

  no1:number=10;
  no2:number=20;

  answer:number=0;
  msg:any="";

  imagepath:string="assets/images/1.jpg";

  constructor(private obj:ActivatedRoute)
  {
       // this.msg=this.obj.snapshot.paramMap.get("msg");
    this.msg=obj.snapshot.params["msg"];
    console.log("param value is " + this.msg);
  
  }

  add()
  {
    
    this.answer=this.no1+this.no2;
    console.log(this.no1 + " + " + this.no2 + "=" + this.answer);

  }


}
