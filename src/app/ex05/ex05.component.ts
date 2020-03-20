import { Component, OnInit } from '@angular/core';
import { NOMES } from '../mock';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {
  nomes = NOMES;
  nomesFiltro: string[];

  buscar(valor: string) {
    this.nomesFiltro = [];

    //método 1
    //for(var i=0; i < this.nomes.length; i++){
    //  if(this.nomes[i].toLowerCase().includes(valor.toLowerCase())){
    //    this.nomesFiltro.push(this.nomes[i]);
    //  }
    //}

    //método 2
    // let temp = [];
    // this.nomes.forEach(buscarItem);
    // function buscarItem(nome){
    //   if(nome.toLowerCase().includes(valor.toLowerCase())){
    //     temp.push(nome);
    //   }
    // }
    // this.nomesFiltro = temp;

    //método 3
    // this.nomesFiltro = this.nomes.filter(function(nome){
    //   return nome.toLowerCase().includes(valor.toLowerCase());
    // });

    //método 4
    this.nomesFiltro = this.nomes.filter(
      (nome) => nome.toLowerCase().includes(valor.toLowerCase()));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
