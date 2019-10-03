import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientFormComponent,
  ],
  exports: [
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    ReactiveFormsModule
  ]
})
export class ClientFormModule { }
