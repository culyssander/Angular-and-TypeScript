import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { CourseInfoComponent } from './courses/course-info.component';
// import { CourseListComponent } from './courses/course-list-compoent';
import { Error404Component } from './error/Error404Component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
// import { ReplacePipe } from './pipe/replace.pipe';
// import { StarComponent } from './star/star.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    // CourseListComponent,
    // StarComponent,
    // ReplacePipe,
    NavbarComponent, 
    Error404Component,
    // CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      // {
      //   path: 'courses', component: CourseListComponent
      // },
      // {
      //   path: 'courses/info/:id', component: CourseInfoComponent
      // },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
