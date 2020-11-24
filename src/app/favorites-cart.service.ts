import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../../../peliculas/src/app/movies-list/Movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesCartService {

private _favoritesList: Movie [] = [];

favoritesList: BehaviorSubject<Movie[]> = new BehaviorSubject([]);
  
constructor() { }

addToCart(movie: Movie) {
  let film: Movie= this._favoritesList.find(v1 => v1.nombre == movie.nombre);
  if (!film){
    this._favoritesList.push({...movie});
  } 
    this.favoritesList.next(this._favoritesList);//equivalente al emitt de eventos
  }
}

    

