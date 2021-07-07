import { Produto } from './../../../models/produto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  @Input() numero_pagina!: number;
  @Input() produtos!: any[]; /* de 0 a 4 no primeiro loop */
  produtos_filtrados: Produto[];

  constructor() {
    this.produtos_filtrados = [];
  }

  filtrar_produtos(pagina: number, produtos: Produto[]){
    let produtos_filtrados = [];
    let i=pagina;
    let l=(i+1)*4;

    for(i=i*4; i<l;i++){
      if(i<produtos.length){
        this.produtos_filtrados[this.produtos_filtrados.length] = produtos[i];
      }
    }
  }

  counter(i: number){
    return new Array(i);
  }

  ngOnInit(): void {

    console.log('--------------'+this.numero_pagina +'--------------------');

    this.filtrar_produtos(this.numero_pagina ,this.produtos);
    console.log(this.produtos_filtrados);
  }

}
