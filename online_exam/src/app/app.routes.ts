import { Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { ArrayexComponent } from './arrayex/arrayex.component';
import { RoutingexComponent } from './routingex/routingex.component';
import { RegisterComponent } from './register/register.component';
import { PipeexComponent } from './pipeex/pipeex.component';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { QuestionmanagementComponent } from './questionmanagement/questionmanagement.component';
import { ManageresultComponent } from './manageresult/manageresult.component';

export const routes: Routes = [

    {path:'addition/:msg',component:AdditionComponent},

    {path:'arrayex',component:ArrayexComponent},

    {path:'routingex',component:RoutingexComponent},

    {path:'register',component:RegisterComponent},

    {path:'pipeex',component:PipeexComponent},

    {path:'communication',component:ParentComponent},

    {path:'login',component:LoginComponent},

    {path:'question',component:QuestionComponent},

    {path:'score',component:ScoreComponent},

    {path:'admindashboard',component:AdmindashboardComponent},

    {path:'questionmanagement',component:QuestionmanagementComponent},

    {path:'manageresult',component:ManageresultComponent},

    {path:'',redirectTo:'register',pathMatch:'full'}


];
