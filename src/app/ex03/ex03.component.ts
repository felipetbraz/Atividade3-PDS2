import { Component, OnInit } from '@angular/core';
import { NOMES } from '../mock';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component implements OnInit {
  nomes = NOMES;
  constructor() { }

  ngOnInit(): void {
  }

}
