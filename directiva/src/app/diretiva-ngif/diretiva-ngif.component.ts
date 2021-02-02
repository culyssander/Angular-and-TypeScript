import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular"];
  mostarCurso = false;

  onMostrarCurso() {
    this.mostarCurso = !this.mostarCurso;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
