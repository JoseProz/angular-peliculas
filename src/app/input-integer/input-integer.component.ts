import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movies-list/Movie';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

constructor() { }

@Input()
movie: Movie;

ngOnInit(): void {
  }

  upQualification(movie: Movie): void {
    if (movie.puntuacion < 10){
      movie.puntuacion++;
    }
  }

  downQualification(movie: Movie): void {
    if (movie.puntuacion > 0){
      movie.puntuacion--;
    }
  }
ChangePuntuacion(event, movie: Movie){
  if (event.target.value <= 0){
    console.log(event.target.value);
    movie.puntuacion = 0;
  }
  else if (event.target.value > 10){
    console.log(event.target.value);
    movie.puntuacion = 10;
  }

}

}
