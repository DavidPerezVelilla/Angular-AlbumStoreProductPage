import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-poduct-list',
  templateUrl: './poduct-list.component.html',
  styleUrls: ['./poduct-list.component.css']
})
export class PoductListComponent implements OnInit {

  products: Product[]
  constructor(private _productService:ProductService) { }

  ngOnInit() {
  }

}
