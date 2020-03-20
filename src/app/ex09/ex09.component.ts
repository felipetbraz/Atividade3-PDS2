import { Component, OnInit } from '@angular/core';
import {PESSOAS} from '../mock';

@Component({
  selector: 'app-ex09',
  templateUrl: './ex09.component.html',
  styleUrls: ['./ex09.component.css']
})
export class Ex09Component implements OnInit {
  pessoas = PESSOAS;
  
  verificaSalario(valor:number){
    return this.pessoas.every(pessoa => pessoa.salario > valor);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
