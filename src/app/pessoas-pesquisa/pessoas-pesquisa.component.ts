import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent{

  constructor() { }

    pessoa = [
      { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG',
      status: true},
      { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP',
       status: false},
      { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC',
      status: true},
      { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR',
      status: true,},
      { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ',
      status: false},
      { nome: 'Giovani Ribeiro', cidade: 'Arapongas', estado: 'PR',
      status: true},
      { nome: 'Carlos Eduardo', cidade: 'Londrina', estado: 'PR',
      status: false}
    ];


}
