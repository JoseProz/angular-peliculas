import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movies-list/Movie';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

constructor() { }

@Input()
puntuacion: number;

@Input()
max: number;

@Input()
min: number;

@Output()
puntuacionChange: EventEmitter<number> = new EventEmitter<number>();

@Output()
maxReached: EventEmitter<string>= new EventEmitter<string>();

ngOnInit(): void {
  }

  upQualification(): void {
    if (this.puntuacion < this.max){
      this.puntuacion++;
      this.puntuacionChange.emit(this.puntuacion);
    }
    else this.maxReached.emit("se alcanzo maxima puntuacion");
  }

  downQualification(): void {
    if (this.puntuacion > this.min){
      this.puntuacion--;
      this.puntuacionChange.emit(this.puntuacion);
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
