import { Component, OnInit } from '@angular/core';

import { Product } from '../../Product';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  
  products: Product[] = []

  constructor(private listservices:ListService){
    this.getProducts()
  }

  ngOnInit(): void {


  }
  removeProduct(product:Product){
      this.products = this.listservices.remover(this.products,product)
  }

  getProducts():void{
    this.listservices.getAll().subscribe((products)=>{this.products = products})
  }
}
