import { QRcodeModel } from './../../components/modal/qrcode.model';
import { QrcodeService } from './../../services/qrcode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrpage',
  templateUrl: './qrpage.component.html',
  styleUrls: ['./qrpage.component.scss']
})
export class QrpageComponent implements OnInit {

  code: any = undefined;

  constructor(private qrService: QrcodeService) { }

  ngOnInit() {
    this.qrService.getRecentCode().subscribe((r: any) => {
      this.code = r;
    });
  }

}
