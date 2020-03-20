import { Component, OnInit } from '@angular/core';
import {PESSOAS} from '../mock';

@Component({
  selector: 'app-ex07',
  templateUrl: './ex07.component.html',
  styleUrls: ['./ex07.component.css']
})
export class Ex07Component implements OnInit {

  pessoas = PESSOAS;
  retorno:any;
  buscarId(id){
    return this.pessoas.find(pessoa => pessoa.id == id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
