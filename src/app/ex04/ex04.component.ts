import { Component, OnInit } from '@angular/core';
import {NOMES} from '../mock';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {
  nomes = NOMES;

  buscar(valor:string){
    alert(valor);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
