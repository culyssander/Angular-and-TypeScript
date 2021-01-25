import { Component } from "@angular/core";
// import { Component } from '@angular/core';

@Component({
    selector: 'meu-primeiro-component',
    template: `
       
          <div style= "color: #fff; border: 1px solid black; background-color: #252537; width 100%; height: 400px; text-align: center; padding: 50px">
            Name: <br>
            <input type="text"> <br>
          </div>

        <p>Meu primeiro component in Angular 2 </p>
    `
})
export class MeuPrimeiroComponent {

}
