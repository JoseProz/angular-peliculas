import { Injectable } from '@angular/core';
import { Movie } from '../../../peliculas/src/app/movies-list/Movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesCartService {

favoritesList: Movie [] = [];
  
constructor() { }

addToCart(movie: Movie) {
  let film: Movie= this.favoritesList.find((v1) => v1.nombre == movie.nombre);
  if (!film){
    this.favoritesList.push({...movie});
    console.log({...movie});
  }else{

  }   

    
  }

}
