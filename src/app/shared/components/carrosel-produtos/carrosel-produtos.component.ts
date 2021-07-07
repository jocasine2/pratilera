import { ProdutosEstabelecimentoService } from './../../../services/estabelecimento/produtos-estabelecimento.service';
import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-carrosel-produtos',
  templateUrl: './carrosel-produtos.component.html',
  styleUrls: ['./carrosel-produtos.component.css']
})
export class CarroselProdutosComponent implements OnInit {

  produto = {} as Produto;
  produtos: any[];

  @Input() store_id: any;

  constructor(private produtosEstabelecimentoService: ProdutosEstabelecimentoService) {
    this.produtos = []
  }

  ngOnInit() {
    this.getProdutosEstabelecimento(this.store_id);
  }

  // Chama o serviço para obter todos os produtos de um estabelecimento
  getProdutosEstabelecimento(store_id: string) {
    this.produtosEstabelecimentoService.getProdutosEstabelecimento(store_id).subscribe((Response: any) => {
      this.produtos = Response.storeProducts.data;
      console.log(this.produtos)
    });
  }

}
