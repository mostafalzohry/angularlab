import { Injectable } from '@angular/core';
import { IProduct } from '../shared-classes-and-types/interface.iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
   ProductList =
    [{
      ID:1,
      Name:"X3 pro",
      Quantity:25,
      price:9000,
      img: 'assets/poco.jpg'


    },
    {
      ID:2,
      Name:"X3 pro",
      Quantity:25,
      price:9000,
      img: 'assets/poco.jpg'
    },
    {
      ID:3,
      Name:"X3 pro",
      Quantity:25,
      price:9000,
      img: 'assets/poco.jpg'
    },
    {
      ID:4,
      Name:"X3 pro",
      Quantity:25,
      price:9000,
      img: 'assets/poco.jpg'
    }];


  constructor() { }

   GetAllProducts() {
    return this.ProductList;
  }

  GetProductById(prdId: number): any {
   
    if (isNaN(prdId)) {
      return null;
    }
    const product = this.ProductList.find(
      (productId: IProduct) => productId.ID === prdId   );
  
    if (!product) {
      return null;   }
  
    return product;
  }
}
