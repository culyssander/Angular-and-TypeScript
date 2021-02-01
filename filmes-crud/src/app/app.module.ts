import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExemploAngularMaterialComponent } from './exemplo-angular-material/exemplo-angular-material.component';
import { ExemploAngularMaterialModule } from './exemplo-angular-material/exemplo-angular-material.module';
import { MaterialModule } from './card/material-module';
import { CardOverviewExample } from './card/card-overview-example';

@NgModule({
  declarations: [
    AppComponent,
    ExemploAngularMaterialComponent,
    CardOverviewExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ExemploAngularMaterialModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
