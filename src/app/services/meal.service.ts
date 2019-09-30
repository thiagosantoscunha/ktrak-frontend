import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../core/models/client.model';
import { Observable } from 'rxjs';
import { MealModel } from '../core/models/meal.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  public uri: string;

  constructor(private http: HttpClient) {
    this.uri = environment.base_url + '/refeicoes';
  }

  getById(id: number): Observable<MealModel> {
    return this.http.get<MealModel>(`${this.uri}/${id}`);
  }

  getByData(date: Date): Observable<MealModel[]> {
    return this.http.post<MealModel[]>(`${this.uri}/buscaPorData`, { data: date.toString() });
  }

  public insert(client: ClientModel): Observable<MealModel> {
    return this.http.post<MealModel>(this.uri, { id: client.id });
  }
}
