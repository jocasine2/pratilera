import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto';
import{ GlobalConstants } from '../../shared/global-constants';

@Injectable({
  providedIn: 'root'
})

export class ProdutosEstabelecimentoService {

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os produtos do estabelecimento
  getProdutosEstabelecimento(sotre_id: string): Observable<Produto[]> {
    let url = GlobalConstants.apiURL+'/api/mobile/v1/store/store-product/list?store_id='+sotre_id+'&page=1';

    return this.httpClient.get<Produto[]>(url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
