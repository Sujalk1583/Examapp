import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routingex',
  standalone: true,
  imports: [],
  templateUrl: './routingex.component.html',
  styleUrl: './routingex.component.css'
})
export class RoutingexComponent 
{

  constructor(private router:Router)
  {

  }

  addition()
  {
      this.router.navigate(["addition","Hello Angular"]);
  }

  arrayex()
  {
    this.router.navigateByUrl("arrayex");
  }
}
