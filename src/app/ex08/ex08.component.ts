import { Component, OnInit } from '@angular/core';
import {PESSOAS} from '../mock';

@Component({
  selector: 'app-ex08',
  templateUrl: './ex08.component.html',
  styleUrls: ['./ex08.component.css']
})
export class Ex08Component implements OnInit {
  pessoas = PESSOAS;

  aumentarSalario(percentual){
    this.pessoas.map(pessoa => pessoa.salario += pessoa.salario * percentual/100)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
