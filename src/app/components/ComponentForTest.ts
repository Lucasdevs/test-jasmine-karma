import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './ComponentForTest.html',
  styleUrls: ['./ComponentForTest.css']
})
export class ComponentForTest {

  titulo: string = 'Título do Componente';

  constructor() { }
}
