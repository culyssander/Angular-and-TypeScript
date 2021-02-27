import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { CursoService } from './curso/curso.service';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CursoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
