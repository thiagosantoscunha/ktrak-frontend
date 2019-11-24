import { Observable } from 'rxjs';
import { ProfessorModel } from './../core/models/professor.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private baseUrl: string = environment.base_url + '/v1/matriculas/professores';

  constructor(private http: HttpClient) { }

  findAll(): Observable<ProfessorModel[]> {
    return this.http.get<ProfessorModel[]>(this.baseUrl);
  }

  findById(id: number): Observable<ProfessorModel> {
    return this.http.get<ProfessorModel>(this.baseUrl + `/${id}`);
  }

  insert(professor: ProfessorModel): Observable<ProfessorModel> {
    console.log('endpoint cria professor', professor);
    return this.http.post<ProfessorModel>(this.baseUrl, professor);
  }

  update(professor: ProfessorModel): Observable<ProfessorModel> {
    console.log('endpoint atualiza professor', professor);
    return this.http.put<ProfessorModel>(this.baseUrl, professor);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }
}
