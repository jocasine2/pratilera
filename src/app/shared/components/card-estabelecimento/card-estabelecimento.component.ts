import { ProdutosEstabelecimentoService } from './../../../services/estabelecimento/produtos-estabelecimento.service';
import { Estabelecimento } from './../../../models/estabelecimento';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-estabelecimento',
  templateUrl: './card-estabelecimento.component.html',
  styleUrls: ['./card-estabelecimento.component.css']
})
export class CardEstabelecimentoComponent implements OnInit {

  @Input() estabelecimento!: Estabelecimento;
  produtos!: any[];

  constructor() { }

  ngOnInit(): void {}

}
