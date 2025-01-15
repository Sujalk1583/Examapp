import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitlePipe } from '../title.pipe';

@Component({
  selector: 'app-pipeex',
  standalone: true,
  imports: [CommonModule,FormsModule,TitlePipe],
  templateUrl: './pipeex.component.html',
  styleUrl: './pipeex.component.css'
})
export class PipeexComponent {

  mydate:Date=new Date();

}
