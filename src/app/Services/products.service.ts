import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/productos";
  products: Producto[] = [];
  add_items: Producto[] = [];
  constructor(private http:HttpClient) { 
    this.add_items=[]
  }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }

  addToCart(item: Producto){
    item.qty_c =1

    if(localStorage.getItem('carrito') === null){
    this.add_items?.push(item);
    localStorage.setItem('carrito', JSON.stringify(this.add_items))
  }
  else if(this.isDuplicated(item.id)){
    this.add_items = JSON.parse(localStorage.getItem('carrito') || '{}')
    this.add_items[item.id].qty_c++;
    localStorage.setItem('carrito', JSON.stringify(this.add_items))
  }
  else{
    this.add_items?.push(item);
    localStorage.setItem('carrito', JSON.stringify(this.add_items))
  }
  console.log(this.add_items)
  }
  isDuplicated(id:any){
    for(var i=0;i<=this.add_items.length -1;i++){
      if(id === this.add_items[i].id){
        return true;
      }
    }
    return false;
  }
}
