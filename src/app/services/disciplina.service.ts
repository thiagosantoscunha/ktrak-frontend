import { DisciplinaModel } from './../core/models/disciplina.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private baseUrl: string = environment.base_url + '/v1/disciplinas';

  constructor(private http: HttpClient) { }

  findAll(): Observable<DisciplinaModel[]> {
    return this.http.get<DisciplinaModel[]>(this.baseUrl);
  }

  findById(id: number): Observable<DisciplinaModel> {
    return this.http.get<DisciplinaModel>(this.baseUrl + `/${id}`);
  }

  insert(disciplina: DisciplinaModel): Observable<DisciplinaModel> {
    console.log('endpoint cria disciplina', disciplina);
    return this.http.post<DisciplinaModel>(this.baseUrl, disciplina);
  }

  update(disciplina: DisciplinaModel): Observable<DisciplinaModel> {
    console.log('endpoint atualiza disciplina', disciplina);
    return this.http.put<DisciplinaModel>(this.baseUrl, disciplina);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }
}
