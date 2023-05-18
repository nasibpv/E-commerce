import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{

  constructor(private http:HttpClient){}
  ngOnInit():void{
  }
  // api cell to view all product
  viewallproducts(){
    return this.http.get('http://localhost:3000/products')
  }
  // api cell to view single products
  viewProduct(productId:any){
    return this.http.get('http://localhost:3000/products/'+productId)
  }
}
