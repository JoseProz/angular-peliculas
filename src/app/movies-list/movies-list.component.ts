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
    director: 'Murphy',
    duracion: '2hs 01min',
    anio: 2012,
  },
  {
    imagen: 'assets/img/HdH.jpg',
    nombre: 'Hombres de Honor',
    genero: 'Drama',
    director: 'Zaraza',
    duracion: '2hs 22min',
    anio: 2000,
  },
  {
    imagen: 'assets/img/BatmanInicia.jpg',
    nombre: 'Batman Inicia',
    genero: 'Thriller',
    director: 'DC',
    duracion: '2hs 34min',
    anio: 2011,
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
