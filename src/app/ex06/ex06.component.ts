import { Component, OnInit } from '@angular/core';
import {PESSOAS} from '../mock';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.css']
})
export class Ex06Component implements OnInit {
  pessoas = PESSOAS;

  getValorTotal(): Number{
    return this.pessoas.reduce((soma,pessoa) => soma + pessoa.salario,0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
