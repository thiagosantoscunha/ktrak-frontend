import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../core/models/client.model';
import { Observable } from 'rxjs';
import { MealModel } from '../core/models/meal.model';
import { HttpClient } from '@angular/common/http';
import { tryParse } from 'selenium-webdriver/http';

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
    return this.http.post<MealModel[]>(`${this.uri}/buscaPorData`, { data: date });
  }

  public insert(clienteNumero: string): Observable<MealModel> {
    const numero: number = parseInt(clienteNumero, 0);
    console.log(numero);
    return this.http.post<MealModel>(this.uri, { clienteNumero: numero });
  }
}
