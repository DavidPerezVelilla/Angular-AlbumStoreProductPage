import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  id:string;

  albumInfo: Album;

  constructor(private _productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this._productService.getAlbum().subscribe(
      response => {
       response.forEach(function(value){
         console.log(value)
        if (value == this.id){
          this.albumInfo = value;
        }
       })
      }
    );



  }

}
