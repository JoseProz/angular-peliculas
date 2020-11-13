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
    definicion: '4K',
    puntuacion: 0,
  },
  {
    imagen: 'assets/img/HdH.jpg',
    nombre: 'Hombres de Honor',
    genero: 'Drama',
    duracion: '2hs 22min',
    anio: 2000,
    definicion: 'SD',
    puntuacion: 0,
  },
  {
    imagen: 'assets/img/BatmanInicia.jpg',
    nombre: 'Batman Inicia',
    genero: 'Thriller',
    duracion: '2hs 34min',
    anio: 2011,
    definicion: 'HD',
    puntuacion: 0,
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
