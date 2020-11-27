import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movies-list/Movie';


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

  deleteToCart(movie:Movie){
    let film: number= this._favoritesList.findIndex(v1 => v1.nombre == movie.nombre);
    this._favoritesList.splice(film,1);
    this.favoritesList.next(this._favoritesList);
  }

  calificar(calif: number, movie: Movie){
    let posicion: number= this._favoritesList.findIndex(p=> p.nombre==movie.nombre);
    this._favoritesList[posicion].puntuacion=calif;
    console.log(this._favoritesList[posicion]);
  }
}

    

