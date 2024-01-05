import { Component } from '@angular/core';

import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../Product';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {

  product?:Product

  constructor(private listService:ListService,private route:ActivatedRoute){
    this.getAnimal()
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.listService.getItem(id).subscribe((product)=>{this.product = product})
  }

}
