import { JitEvaluator } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() {}

  getCursos() {
    return ['java', 'Javascript', 'Angular', 'Node.js'];
  }
}
