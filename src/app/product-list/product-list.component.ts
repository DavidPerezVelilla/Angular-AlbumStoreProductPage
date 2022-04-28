import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Album } from 'app/album';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]
  albumInfo:Album[];
  constructor(private _productService: ProductService, private _productServiceAlbum: ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      response => {
        this.products = response
        console.log('hola 2')
      })
    console.log('hola 1');

    this._productServiceAlbum.getAlbum().subscribe(
      response => {
        this.albumInfo = response
      }
    );
  }

}
