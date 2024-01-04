import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {
  name: String = 'Daniel';
  job:String = 'Programador'
  @Input() carro!:{name:String,year:Number}
  car = {
    name: this.carro,
    year: '2020',
  }


  constructor(){}

  ngOnInit(): void {

  }

}
