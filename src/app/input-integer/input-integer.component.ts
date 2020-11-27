import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoritesCartService } from '../favorites-cart.service';
import { Movie } from '../movies-list/Movie';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

listMovie: Movie[]; 


constructor(private cart: FavoritesCartService) {
  this.cart.favoritesList.subscribe(c => this.listMovie = c);
}

@Input()
puntuacion: number;

@Input()
max: number;

@Input()
movie: Movie;

@Input()
min: number;

@Output()
puntuacionChange: EventEmitter<number> = new EventEmitter<number>();

@Output()
maxReached: EventEmitter<string>= new EventEmitter<string>();



ngOnInit(): void {
  }
  
  puntuar(calif: number, movie: Movie){
    this.cart.calificar(calif,movie);
  }

  upQualification(): void {
    if (this.puntuacion < this.max){
      this.puntuacion++;
      console.log(this.puntuacion);
      //this.puntuacionChange.emit(this.puntuacion);
    }
    else this.maxReached.emit("se alcanzo maxima puntuacion");
  }

  downQualification(): void {
    if (this.puntuacion > this.min){
      this.puntuacion--;
      console.log(this.puntuacion);
     // this.puntuacionChange.emit(this.puntuacion);
    }
  }
ChangePuntuacion(event): void{
  if (event.target.value <= this.min){
    console.log(event.target.value);
    this.puntuacion = this.min;
    this.puntuacionChange.emit(this.puntuacion);
  }
  else if (event.target.value > this.max){
    console.log(event.target.value);
    this.puntuacion = this.max;
    this.puntuacionChange.emit(this.puntuacion);
  }

}

}
