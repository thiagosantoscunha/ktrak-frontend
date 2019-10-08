import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ClockModule } from 'src/app/components/clock/clock.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    ClockModule
  ],
  exports: [NavigationComponent],
})
export class NavigationModule { }
