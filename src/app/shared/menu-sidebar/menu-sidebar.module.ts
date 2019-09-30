import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSidebarComponent } from './menu-sidebar.component';
import { DropdownModule } from 'src/app/directives/dropdown/dropdown.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuSidebarComponent],
  imports: [
    CommonModule,
    DropdownModule,
    RouterModule
  ],
  exports: [MenuSidebarComponent],
})
export class MenuSidebarModule { }
