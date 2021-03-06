import { HeaderContentPageModule } from './../../shared/header-content-page/header-content-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
