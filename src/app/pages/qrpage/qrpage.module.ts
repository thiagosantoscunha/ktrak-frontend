import { QRCodeModule } from 'angularx-qrcode';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrpageComponent } from './qrpage.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';

@NgModule({
  declarations: [QrpageComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    QRCodeModule
  ],
  exports: [QrpageComponent],
})
export class QrpageModule { }
