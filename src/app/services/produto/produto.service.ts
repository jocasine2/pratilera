import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Produto } from 'src/app/models/produto';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import{ GlobalConstants } from '../../shared/global-constants';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
   constructor(private HttpClient: HttpClient) { }

  // Obtem todos os produtos do estabelecimento
  getProduto(product_id: string, store_id: string): Observable<Produto[]> {
    let url = GlobalConstants.apiURL+'/api/mobile/v1/product?product_id='+product_id+'&store_id='+store_id;

    return this.HttpClient.get<Produto[]>(url)
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
