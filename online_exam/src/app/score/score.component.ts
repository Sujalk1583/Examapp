import { Component } from '@angular/core';
import { Answer, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent 
{

  score:any=0;

  allAnswers:any[]=[];

  data:any;


  constructor(private questionService:QuestionService,private route:ActivatedRoute)
  {
      // [10 subscribe()] Observable object

      this.route.queryParamMap.subscribe(score=>this.score=score.get("score"));

      this.route.queryParamMap.subscribe(value=>{this.data=value.get("allanswers");this.allAnswers=JSON.parse(this.data);console.log(this.allAnswers)});
     
  }

  compare(submittedAnswer:string,correctAnswer:string)
  {
    if(submittedAnswer==correctAnswer)
      return "green";
    else
      return "red";
  }


}
