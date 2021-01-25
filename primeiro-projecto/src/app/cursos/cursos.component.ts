import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // cursos: string[] = ['java', 'Angular'];
  cursos: String[];
  nomePortal: String;

  

  // cursos = service.getCursos();

  constructor(service: CursosService) {
    
    this.nomePortal = 'http://loiana.training';

    // var service = new CursosService(); //estou a usar injecao de dependencia
    this.cursos = service.getCursos();
   }

  ngOnInit(): void {
  }

}
