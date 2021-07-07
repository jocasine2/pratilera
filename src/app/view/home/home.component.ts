import { Component, OnInit } from '@angular/core';
import { EstabelecimentosService } from '../../services/estabelecimento/estabelecimentos.service';
import { Estabelecimento } from '../../models/estabelecimento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  estabelecimento = {} as Estabelecimento;
  estabelecimentos: any[];

  constructor(private estabelecimentosService: EstabelecimentosService) {
    this.estabelecimentos = []
  }

  ngOnInit() {
    this.getEstabelecimentos();
  }

   // Chama o serviço para obter todos os estabelecimento
   getEstabelecimentos() {
    this.estabelecimentosService.getEstabelecimentos().subscribe((Response: any) => {
      this.estabelecimentos = Response.data;
      // console.log(this.estabelecimentos)
    });
  }

}
