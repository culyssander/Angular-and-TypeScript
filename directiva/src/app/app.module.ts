import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { FormsModule } from '@angular/forms';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { DiretivaCustomizadasComponent } from './diretiva-customizadas/diretiva-customizadas.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgstyleComponent,
    HighlightMouseDirective,
    DiretivaCustomizadasComponent,
    FundoAmareloDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
