import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QRCodeModel } from '../core/models/qrcode.model';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  private baseUrl: string = environment.base_url + '/v1/qrcode';

  constructor(private http: HttpClient) { }

  getRecentCode(): Observable<QRCodeModel> {
    return this.http.get<QRCodeModel>(this.baseUrl + '/current');
  }

  generate(): Observable<QRCodeModel> {
    return this.http.get<QRCodeModel>(this.baseUrl + '/generate');
  }
}
