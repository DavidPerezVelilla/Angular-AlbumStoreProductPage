import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from './product';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  @ViewChild(ProductDescriptionComponent)
  private productDescription: ProductDescriptionComponent;
  products: Product[]
  constructor(private _productService: ProductService ) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      response => {
        this.products = response

      });


  }

  refresh(){
    this.productDescription.ngOnInit()
  }

}


