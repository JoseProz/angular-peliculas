import { Component, OnInit } from '@angular/core';
import { FavoritesCartService } from '../favorites-cart.service';
import { Movie } from '../movies-list/Movie';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  favoriteFilms: Movie[];
  constructor(private cart: FavoritesCartService) {
    this.cart.favoritesList.subscribe(c => this.favoriteFilms = c);
   }
  ngOnInit(): void {
  }

  deleteToCart(movie: Movie){
    this.cart.deleteToCart(movie);
  }

}
