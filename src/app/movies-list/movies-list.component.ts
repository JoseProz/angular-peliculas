import { Component, OnInit } from '@angular/core';
import { Movie } from './Movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movie [] = [
    {
    imagen: 'assets/img/evangers.jpg',
    nombre: 'evangers',
    genero: 'Acción',
    duracion: '2hs 01min',
    anio: 2012,
    puntuacion: 0,
  },
  {
    imagen: 'assets/img/HdH.jpg',
    nombre: 'Hombres de Honor',
    genero: 'Drama',
    duracion: '2hs 22min',
    anio: 2000,
    puntuacion: 0,
  },
  {
    imagen: 'assets/img/BatmanInicia.jpg',
    nombre: 'Batman Inicia',
    genero: 'Thriller',
    duracion: '2hs 34min',
    anio: 2011,
    puntuacion: 0,
  }
  ]
  constructor() { }

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
