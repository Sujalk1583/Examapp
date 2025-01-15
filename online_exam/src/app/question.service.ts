import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService 
{

  constructor(private httpClient:HttpClient) 
  { 


  }


  getAllQuestions(subject:string)
  {
    return this.httpClient.get<Question[]>("http://localhost:8000/getAllQuestions/"+subject);
  }
  
  getAllSubjects()
  {
    return this.httpClient.get<string[]>("http://localhost:8000/getAllSubjects/");

  }

  addQuestion(question:Question)
  {
    return this.httpClient.post<boolean>("http://localhost:8000/addQuestion/" , question);
  }

  updateQuestion(question: Question) 
  {
    return this.httpClient.put<boolean>("http://localhost:8000/updateQuestion/" , question);
  }

  viewQuestion(qno:number,subject:string)
  {
    return this.httpClient.get<Question>("http://localhost:8000/viewQuestion/"+qno+"/"+subject);
  }

  deleteQuestion(qno:number,subject:string)
  {
    return this.httpClient.delete<boolean>("http://localhost:8000/deleteQuestion/"+qno+"/"+subject);
  }

  saveResult(result:Result)
  {
    return this.httpClient.post("http://localhost:8000/saveResult/",result);
  }

}



export class Question
{
  qno:number;
  subject:string;
  qname:string;
  op1:string;
  op2:string;
  op3:string;
  op4:string;
  answer:string;

   constructor(qno:number,subject:string,qname:string,op1:string,op2:string,op3:string,op4:string,answer:string)
   {
    this.qno=qno;
    this.subject=subject;
    this.qname=qname;
    this.answer=answer;
    this.op1=op1;
    this.op2=op2;
    this.op3=op3;
    this.op4=op4;
    this.answer=answer;
   }
   
}


export class Answer
{
  qno:number;
  qname:string;
  submittedAnswer:string;
  correctAnswer:string;


  constructor(qno:number,qname:string,submittedAnswer:string,correctAnswer:string)
  {
    this.qno=qno;
    this.qname=qname;
    this.submittedAnswer=submittedAnswer;
    this.correctAnswer=correctAnswer;
  }

}




