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
  paginas: any[];

  @Input() store_id: any;

  constructor(private produtosEstabelecimentoService: ProdutosEstabelecimentoService) {
    this.produtos = []
    this.paginas = []
  }

  ngOnInit() {
    this.getProdutosEstabelecimento(this.store_id);
  }

  counter(i: number){
    return new Array(i);
  }

  // Chama o serviço para obter todos os produtos de um estabelecimento
  getProdutosEstabelecimento(store_id: string) {
    this.produtosEstabelecimentoService.getProdutosEstabelecimento(store_id).subscribe((Response: any) => {
      this.produtos = Response.storeProducts.data;
      this.paginas = this.counter(Math.ceil((this.produtos.length)/4));

      console.log( this.produtos.length +' produtos em '+(this.paginas.length)+' paginas' );
      // console.log(this.produtos);
    });
  }

}
