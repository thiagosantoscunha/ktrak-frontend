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
    headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3');
    headers.append('Accept-Encoding', 'gzip, deflate, br');
    headers.append('Content-Type', 'application/json');
    return this.http.get<ClientModel[]>(this.uri, { headers });
  }

  public getById(id: number): Observable<ClientModel> {
    return this.http.get<ClientModel>(`${this.uri}/${id}`);
  }

  public remove(id: number): Observable<any> {
    return this.http.delete<any>(`${this.uri}/${id}`);
  }

  public searchByNumero(id: number): Observable<ClientModel> {
    const params: HttpParams = new HttpParams();
    params.append('numero', id.toString());
    return this.http.get<ClientModel>(`${this.uri}/busca`, { params });
  }

}
