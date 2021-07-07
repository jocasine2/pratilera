import { Produto } from 'src/app/models/produto';
import { Component, Input, OnInit } from '@angular/core';
import{ GlobalConstants } from '../../global-constants';

@Component({
  selector: 'app-card-produto-detalhe-produto',
  templateUrl: './card-produto-detalhe-produto.component.html',
  styleUrls: ['./card-produto-detalhe-produto.component.css']
})
export class CardProdutoDetalheProdutoComponent implements OnInit {

  @Input() produto!: Produto;
  apiURL!: string;
  constructor() {
    this.apiURL = GlobalConstants.apiURL
   }

  ngOnInit(): void {
  }

}
