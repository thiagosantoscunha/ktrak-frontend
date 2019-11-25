import { AlunoModel } from './../core/models/aluno.model';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private baseUrl: string = environment.base_url + '/v1/matriculas/alunos';

  constructor(private http: HttpClient) { }

  findAll(): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(this.baseUrl);
  }

  findById(id: number): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(this.baseUrl + `/${id}`);
  }

  findAllByAluno(nome: string): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(this.baseUrl + `/filter?nome=${nome}`);
  }

  insert(aluno: AlunoModel): Observable<AlunoModel> {
    console.log('endpoint cria aluno', aluno);
    return this.http.post<AlunoModel>(this.baseUrl, aluno);
  }

  update(aluno: AlunoModel): Observable<AlunoModel> {
    console.log('endpoint atualiza aluno', aluno);
    return this.http.put<AlunoModel>(this.baseUrl, aluno);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }

}
