import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,RouterLink} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule} from "@angular/forms";
import { LoginService } from './login/loginservices.service';
import { CoursesComponent } from './courses/courses.component';
import { MoviesComponent } from './movies/movies.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    WelcomeComponent,
    CoursesComponent,
    MoviesComponent,
    ShoppingComponent,
    TvshowsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([
      
            {path: 'welcome', component:WelcomeComponent},
            
            {path: 'login' , component:LoginComponent},

            {path: 'courses' , component:CoursesComponent},

            {path: 'movies' , component:MoviesComponent},

            {path: 'shopping' , component:ShoppingComponent},

            {path: 'tvshows' , component:TvshowsComponent},
           
            {path:'**',component:LoginComponent},        
             
            
          ])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
