import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaLetivoModel } from '../core/models/dia-letivo.model';
import { TurmaModel } from '../core/models/turma.model';

@Injectable({
  providedIn: 'root'
})
export class DiaLetivoService {

  private baseUrl: string = environment.base_url + '/v1/diasLetivos';

  constructor(private http: HttpClient) { }

  findAll(): Observable<DiaLetivoModel[]> {
    return this.http.get<DiaLetivoModel[]>(this.baseUrl);
  }

  findById(id: number): Observable<DiaLetivoModel> {
    return this.http.get<DiaLetivoModel>(this.baseUrl + `/${id}`);
  }

  findByTurma(t: TurmaModel): Observable<DiaLetivoModel[]> {
    return this.http.get<DiaLetivoModel[]>(this.baseUrl + `/turmas/${t.id}`)
  }

  insert(disciplina: DiaLetivoModel): Observable<DiaLetivoModel> {
    return this.http.post<DiaLetivoModel>(this.baseUrl, disciplina);
  }

  update(disciplina: DiaLetivoModel): Observable<DiaLetivoModel> {
    return this.http.put<DiaLetivoModel>(this.baseUrl, disciplina);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }
}
