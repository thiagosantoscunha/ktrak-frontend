import { QrcodeService } from './../../services/qrcode.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { QRCodeModel } from 'src/app/core/models/qrcode.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-qrpage',
  templateUrl: './qrpage.component.html',
  styleUrls: ['./qrpage.component.scss']
})
export class QrpageComponent implements OnInit {

  code: QRCodeModel = undefined;

  constructor(private qrService: QrcodeService) { }

  ngOnInit() {
    this.create();
  }

  findRecentCode() {
    this.qrService.getRecentCode().subscribe((qrcode: QRCodeModel) => {
      this.code = qrcode;
      console.log(this.code);
    }, (error: HttpErrorResponse) => {
        console.info(error);
        this.create();
    });
  }

  create() {
    this.qrService.generate().subscribe((qrCode: QRCodeModel) => {
      this.code = qrCode;
    }, (error: HttpErrorResponse) => {
      console.error('Erro ao tentar gerar o código');
        console.error(error);
        if (error.status === 400) {
          this.findRecentCode();
        }
    });
  }

}
