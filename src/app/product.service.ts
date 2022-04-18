import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  _albumUrl = "../assets/album.json"
  constructor(private _http:Http) {
   }

   getAlbum(id:number): Observable<any>{
     return this._http.get(this._albumUrl).pipe(
      map(response => response.json())
     )
    }

}

