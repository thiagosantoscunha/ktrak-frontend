import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';

@NgModule({
  declarations: [
    ClientFormComponent
  ],
  exports: [
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    HeaderContentPageModule
  ]
})
export class ClientFormModule { }
