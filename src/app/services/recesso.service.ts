import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecessoModel } from '../core/models/recesso.model';

@Injectable({
  providedIn: 'root'
})
export class RecessoService {

  private baseUrl: string = environment.base_url + '/v1/recessos';

  constructor(private http: HttpClient) { }

  findAll(): Observable<RecessoModel[]> {
    return this.http.get<RecessoModel[]>(this.baseUrl);
  }

  findById(id: number): Observable<RecessoModel> {
    return this.http.get<RecessoModel>(this.baseUrl + `/${id}`);
  }

  insert(disciplina: RecessoModel): Observable<RecessoModel> {
    return this.http.post<RecessoModel>(this.baseUrl, disciplina);
  }

  update(recesso: RecessoModel): Observable<RecessoModel> {
    return this.http.put<RecessoModel>(this.baseUrl, recesso);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }
}
