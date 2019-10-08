import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientModel } from '../core/models/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  public uri: string;

  constructor(private http: HttpClient) {
    this.uri = environment.base_url + '/clientes';
  }

  public getAll(): Observable<ClientModel[]> {
    const headers: HttpHeaders = new HttpHeaders();
    return this.http.get<ClientModel[]>(this.uri, { headers });
  }

  public getById(id: number): Observable<ClientModel> {
    return this.http.get<ClientModel>(`${this.uri}/${id}`);
  }

  public insert(cliente: ClientModel): Observable<any> {
    return this.http.post<any>(`${this.uri}`, cliente);
  }

  public remove(id: number): Observable<any> {
    return this.http.delete<any>(`${this.uri}/${id}`);
  }

  public searchByNumero(id: number): Observable<ClientModel> {
    const params: HttpParams = new HttpParams();
    params.append('numero', id.toString());
    return this.http.get<ClientModel>(`${this.uri}/busca`, { params });
  }

  search(criteria: any): Observable<ClientModel[]> {
    return this.http.post<ClientModel[]>(`${this.uri}/filtro`, {
      ativo: true,
      nomeParcial: criteria,
      tipoCliente: 'ALUNO',
    });
  }

}
