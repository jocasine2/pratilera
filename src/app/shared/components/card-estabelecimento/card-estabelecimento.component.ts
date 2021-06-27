import { Estabelecimento } from './../../../models/estabelecimento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-estabelecimento',
  templateUrl: './card-estabelecimento.component.html',
  styleUrls: ['./card-estabelecimento.component.css']
})
export class CardEstabelecimentoComponent implements OnInit {

  @Input() estabelecimento!: Estabelecimento;

  constructor() { }

  ngOnInit(): void {
  }

}
