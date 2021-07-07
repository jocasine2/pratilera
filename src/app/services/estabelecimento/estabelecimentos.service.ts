import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Estabelecimento } from '../../models/estabelecimento';
import{ GlobalConstants } from '../../shared/global-constants';
@Injectable({
  providedIn: 'root'
})

export class EstabelecimentosService {

  // url = 'http://10.1.0.67:896/api/mobile/v1/store/list?page=1';
  url = GlobalConstants.apiURL+'/api/mobile/v1/store/list?page=1';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {

    console.log();
   }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os estabelecimentos
  getEstabelecimentos(): Observable<Estabelecimento[]> {
    return this.httpClient.get<Estabelecimento[]>(this.url)
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
