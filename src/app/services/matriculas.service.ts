import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatriculaModel } from '../core/models/matricula.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.base_url + '/v1/matriculas';
  }

  findAll(): Observable<MatriculaModel[]> {
    return this.http.get<MatriculaModel[]>(this.baseUrl);
  }

  findById(id: number): Observable<MatriculaModel> {
    return this.http.get<MatriculaModel>(this.baseUrl + `/{id}`);
  }

  insert(matricula: MatriculaModel): Observable<MatriculaModel> {
    return this.http.post<MatriculaModel>(this.baseUrl, matricula);
  }

  update(matricula: MatriculaModel): Observable<MatriculaModel> {
    return this.http.put<MatriculaModel>(this.baseUrl, matricula);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `?id=${id}`);
  }

}
