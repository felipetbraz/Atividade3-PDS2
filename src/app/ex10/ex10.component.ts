import { Component, OnInit } from '@angular/core';
import {PESSOAS} from '../mock';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.css']
})
export class Ex10Component implements OnInit {
  pessoas = PESSOAS;
  resposta:any;
  buscaCampos(criterio : string){
    return this.pessoas.filter((pessoa) => 
          Object.keys(pessoa).some
            (chave => pessoa[chave].toString().includes(criterio)));
  }
  constructor() { }

  ngOnInit(): void {
  }

}
