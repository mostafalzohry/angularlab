import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared-classes-and-types/enum.discountoffers';
import { ICategory } from '../shared-classes-and-types/interface.icategory';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  discount: DiscountOffers
  storeName:String
   storeLogo:String

  CategoryList:ICategory[]
  clientName:string
   IsPurshased:Boolean
   showTable: boolean = false;

   toggle(): void {
    this.IsPurshased = !this.IsPurshased;
  }

  constructor(  private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.discount = DiscountOffers.tenpercentage
    this.storeName = 'poco'
    this.storeLogo = 'poco'

    this.CategoryList = [{
      ID:1,
      Name:"Fashion"
    },
    {
      ID:2,
      Name:"Electornics"
    },
    {
      ID:3,
      Name:"Furniture"
    }]
    this.clientName = 'put your name here'
    this.IsPurshased = true
   }

  ngOnInit(): void {
  }


  }
