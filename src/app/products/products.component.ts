import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared-classes-and-types/enum.discountoffers';
import { ICategory } from '../shared-classes-and-types/interface.icategory';
import { IProduct } from '../shared-classes-and-types/interface.iproduct'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  discount: DiscountOffers
  storeName:String
   storeLogo:String
  ProductList:IProduct[]
  CategoryList:ICategory[]
  clientName:string
   IsPurshased:Boolean





  constructor() {
    this.discount = DiscountOffers.tenpercentage
    this.storeName = 'poco'
    this.storeLogo = 'poco'

    this.ProductList =
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

    this.CategoryList = [{
      ID:1,
      Name:"Fashion"
    },
    {
      ID:2,
      Name:"Electornics"
    }]
    this.clientName = 'Mostafa Mohammed'
    this.IsPurshased = true
   }

  ngOnInit(): void {
  }

}