import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  productList:any
  filterProduct:any;
  constructor(private ps:ProductsService){}
  ngOnInit():void{
    this.ps.viewallproducts().subscribe((data:any)=>{
      // console.log(data);
      this.productList=data
      
    })

  }

  filter(category:any){
    this.filterProduct=this.productList.filter((item:any)=>item.categoryId==category || category=="")

  }

}
