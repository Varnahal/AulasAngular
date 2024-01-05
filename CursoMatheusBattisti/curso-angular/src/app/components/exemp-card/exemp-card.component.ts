import { Component, Input } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-exemp-card',
  templateUrl: './exemp-card.component.html',
  styleUrl: './exemp-card.component.css'
})
export class ExempCardComponent {
  @Input() titulo:String = ''
  @Input() desc:String = ''
  @Input() created_at:String = ''
  @Input() product!:Product
  @Input() products!:Product[]
  showCreated = false

  showCreatedAt(product:Product):void{
    this.showCreated = true
  }
}
