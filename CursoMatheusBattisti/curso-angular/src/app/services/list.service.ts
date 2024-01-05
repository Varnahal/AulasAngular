import { Injectable } from '@angular/core';
import { Product } from '../Product';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL = 'http://localhost:3000/Products'

  constructor( private http:HttpClient) { }
  remover(id:Number){
    return this.http.delete<Product>(`${this.apiURL}/${id}`)
  }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL)
  }

  getItem(id:Number):Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }
}
