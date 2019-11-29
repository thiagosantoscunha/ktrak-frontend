import { AlunoModel } from '../core/models/aluno.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TurmaModel } from '../core/models/turma.model';
import { TurmaSemestreModel } from '../core/models/turma-semestre.model';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseUrl: string = environment.base_url + '/v1/turmas';

  constructor(private http: HttpClient) { }

  findAll(): Observable<TurmaModel[]> {
    return this.http.get<TurmaModel[]>(this.baseUrl);
  }

  findById(id: number): Observable<TurmaModel> {
    return this.http.get<TurmaModel>(this.baseUrl + `/${id}`);
  }

  findAllByAluno(aluno: AlunoModel): Observable<TurmaModel[]> {
    return this.http.get<TurmaModel[]>(`${this.baseUrl}/alunos/${aluno.id}`);
  }

  insert(turma: TurmaModel): Observable<TurmaModel> {
    return this.http.post<TurmaModel>(this.baseUrl, turma);
  }

  update(turma: TurmaModel): Observable<TurmaModel> {
    return this.http.put<TurmaModel>(this.baseUrl, turma);
  }

  remove(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `?id=${id}`);
  }

  openInSemetre(model: TurmaSemestreModel): Observable<TurmaModel> {
    return this.http.post<TurmaModel>(this.baseUrl + '/montaTurmaNoSemestre', model);
  }

}
