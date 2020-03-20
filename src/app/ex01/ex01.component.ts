import { Component, OnInit } from '@angular/core';
import { NOMES } from '../mock';


@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  nomes = NOMES;

  constructor() { }

  ngOnInit(): void {
  }

}
