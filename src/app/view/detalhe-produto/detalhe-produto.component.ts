import { ProdutoService } from './../../services/produto/produto.service';
import { Produto } from 'src/app/models/produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto!: Produto;
  product_id!: string;
  store_id!: string;

  constructor( private route: ActivatedRoute, private produtoService: ProdutoService ) {
    this.route.params.subscribe(params => this.product_id = params['product_id']);
    this.route.params.subscribe(params => this.store_id = params['store_id']);
  }


  ngOnInit(): void {
    this.getProduto(this.product_id, this.store_id);
  }

  // Chama o serviço para obtém todos os carros
  getProduto(product_id: string, sotre_id: string) {
    this.produtoService.getProduto(product_id, sotre_id).subscribe((Response: any) => {
      this.produto = Response.product;
      console.log(this.produto);
    });
  }
}
