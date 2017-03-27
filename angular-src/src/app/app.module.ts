import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

//NOTE -- had to import these services manually
import {ValidateService} from './services/validate.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SentencesComponent } from './components/sentences/sentences.component';
import { DisplayallComponent } from './components/displayall/displayall.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { SearchComponent } from './components/search/search.component';
import { CommentComponent } from './components/comment/comment.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:title', component: SearchComponent},
  {path: 'dummy', component: DummyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'displayall', component: DisplayallComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'comment', component: CommentComponent},
  {path: 'sentences', component: SentencesComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SentencesComponent,
    DisplayallComponent,
    QuizComponent,
    DummyComponent,
    SearchComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
