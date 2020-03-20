import { Component, OnInit } from '@angular/core';
import { NOMES } from '../mock';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit {
  nomes = NOMES;
  constructor() { }

  ngOnInit(): void {
  }

}
