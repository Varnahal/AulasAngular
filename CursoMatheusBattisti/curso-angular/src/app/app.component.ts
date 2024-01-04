import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Varnahal'
  car = {
    name:'TESLA',
    year:2020,
  }

  title = 'curso-angular';
}
