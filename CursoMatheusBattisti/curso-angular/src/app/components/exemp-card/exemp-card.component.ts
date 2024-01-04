import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exemp-card',
  templateUrl: './exemp-card.component.html',
  styleUrl: './exemp-card.component.css'
})
export class ExempCardComponent {
  @Input() titulo:String = ''
  @Input() desc:String = ''
}
