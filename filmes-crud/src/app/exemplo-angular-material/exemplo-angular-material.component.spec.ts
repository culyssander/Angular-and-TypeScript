import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploAngularMaterialComponent } from './exemplo-angular-material.component';

describe('ExemploAngularMaterialComponent', () => {
  let component: ExemploAngularMaterialComponent;
  let fixture: ComponentFixture<ExemploAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploAngularMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
