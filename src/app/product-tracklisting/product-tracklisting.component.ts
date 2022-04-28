import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  id:string;
  albumInfo: Album[];

  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id == '1'){
      this.id = '0';
    }else{
      this.id = '1';
    }

    return this._productService.getAlbum().subscribe(response => this.albumInfo = response);

  }
}
