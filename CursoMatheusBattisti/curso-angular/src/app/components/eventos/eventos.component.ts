import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show:Boolean = false
  text:String = 'Exibindo um texto'

  showMessage(): void{
    this.show = !this.show
  }

  congratulations():void{
    this.text = 'Parabéns'
    console.log(this.text)
  }
}
