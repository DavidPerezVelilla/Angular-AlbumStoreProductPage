import { Album } from "./album";

export interface Product {
  id:number;
  artistName:string;
  albumName:string;
  album : Album;
}
