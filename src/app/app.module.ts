import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { LoginService } from "./login.service";
import { UserService } from "./user.service";
import { CommonService } from "./common.service";
import { DataserviceService } from "./dataservice.service";
import { StockmarketService } from "./stockmarket.service";
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';
import { TextComponent } from './text/text.component';
import { TagComponent } from './tag/tag.component';
import { CategoryComponent } from './category/category.component';
import { QuizComponent } from './quiz/quiz.component';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';
import { StockmarketComponent } from './stockmarket/stockmarket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    DashboardComponent,
    RegisterComponent,
    HeaderComponent,
    ProjectComponent,
    UserComponent,
    ProfileComponent,
    HomeComponent,
    LinkComponent,
    TextComponent,
    TagComponent,
    CategoryComponent,
    QuizComponent,
    ExamComponent,
    ResultComponent,
    StockmarketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Title, LoginService, UserService, DataserviceService, CommonService, StockmarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
