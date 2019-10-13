import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViaCepModel } from '../models/via-cep.model';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  private basePath = 'viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  getAddressByCep(cep: string, type: string = 'json' ): Observable<ViaCepModel> {
    return this.http.get<ViaCepModel>(`http://viacep.com.br/ws/${cep}/${type}`);
  }

}
