import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDeCarga } from './boton-de-carga';

describe('BotonDeCarga', () => {
  let component: BotonDeCarga;
  let fixture: ComponentFixture<BotonDeCarga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonDeCarga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonDeCarga);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
