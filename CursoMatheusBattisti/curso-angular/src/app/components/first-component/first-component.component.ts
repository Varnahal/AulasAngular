import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {
  name: String = 'Daniel';
  job:String = 'Programador'
  cor = {
    name: 'Tesla',
    year: '2020',
  }


  constructor(){}

  ngOnInit(): void {

  }

}
