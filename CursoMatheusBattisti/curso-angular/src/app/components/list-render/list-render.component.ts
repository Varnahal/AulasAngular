import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  products = [
    {desc:'gasolina',unidade:'LTS'},
    {desc:'sabão em pó',unidade:'UND'},
    {desc:'lubrificante',unidade:'UND'}
  ]
}
