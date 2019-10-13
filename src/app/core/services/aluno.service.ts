import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ViaCepModel } from '../models/via-cep.model';
import { AlunoModel } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private basePath: string;

  constructor(private http: HttpClient) {
    this.basePath = 'http://localhost:3000/alunos';
  }

  public insert(aluno: AlunoModel): Observable<AlunoModel> {
    return this.http.post<AlunoModel>(this.basePath, aluno);
  }

  public getAll(): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(this.basePath);
  }

}
