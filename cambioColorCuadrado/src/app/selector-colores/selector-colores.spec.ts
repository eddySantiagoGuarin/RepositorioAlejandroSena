import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorColores } from './selector-colores';

describe('SelectorColores', () => {
  let component: SelectorColores;
  let fixture: ComponentFixture<SelectorColores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorColores],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorColores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
