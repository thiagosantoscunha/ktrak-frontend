import { AlunoModel } from '../core/models/aluno.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseUrl: string = environment.base_url + '/v1/turmas';

  constructor(private http: HttpClient) { }

  findAll(): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(this.baseUrl);
  }

  findAllByAluno(aluno: AlunoModel): Observable<[]> {
    return this.http.get<[]>(this.baseUrl + `/alunos/${aluno.id}`);
  }

}
