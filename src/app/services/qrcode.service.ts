import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QRcodeModel } from '../components/modal/qrcode.model';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  private baseUrl: string = environment.base_url + '/v1/qrcode';

  constructor(private http: HttpClient) { }

  getRecentCode(): Observable<any> {
    return this.http.get(this.baseUrl + '/data');
  }
}
