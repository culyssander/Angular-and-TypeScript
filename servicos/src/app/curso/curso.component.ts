import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: string[] = [];
  // cursoService: CursoService;


  constructor(private cursoService: CursoService) {
    // this.cursoService = new CursoService();
    // this.cursoService = cursoService;
  }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this.cursos = this.cursoService.getCursos();
  }

}
