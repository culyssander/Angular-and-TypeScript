import { Inject } from "@angular/core";

@Inject({})
export class CursoService {

    getCursos() {
        return ['Angular', 'Java'];
    }
}