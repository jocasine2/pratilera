import { Produto } from 'src/app/models/produto';
import { Component, OnInit, Input } from '@angular/core';
import{ GlobalConstants } from '../../global-constants';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() produto!: Produto;
  @Input() numero_pagina!: number;
  apiURL!: string;

  constructor() {
    this.apiURL = GlobalConstants.apiURL
  }


  ngOnInit(): void {
    console.log(this.produto);
  }

}
