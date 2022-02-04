import { ProductsComponent } from './products/products.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firstday';
  @ViewChild(ProductsComponent) child: ProductsComponent;

  showProducts() {
    this.child.renderValues();
  }
  Products() {
    this.child.toggle();
  }
}

