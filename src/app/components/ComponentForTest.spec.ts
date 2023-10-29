import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentForTest } from './ComponentForTest';

describe('ComponentForTest', () => {
  let fixture: ComponentFixture<ComponentForTest>;
  let component: ComponentForTest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentForTest],
    });
    fixture = TestBed.createComponent(ComponentForTest);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter um título', () => {
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('p').textContent).toContain('Este é o conteúdo do meu componente.');
  });

});
