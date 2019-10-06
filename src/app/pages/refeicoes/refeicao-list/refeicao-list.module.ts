import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefeicaoListComponent } from './refeicao-list.component';
import { RefeicoesRoutingModule } from '../refeicoes-routing.module';
import { RefeicaoFormModule } from '../refeicao-form/refeicao-form.module';
import { MealService } from 'src/app/services/meal.service';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { MealListWidgetModule } from 'src/app/components/widgets/meal-list-widget/meal-list-widget.module';

@NgModule({
  declarations: [RefeicaoListComponent],
  imports: [
    CommonModule,
    RefeicaoFormModule,
    RefeicoesRoutingModule,
    HeaderContentPageModule,
    MealListWidgetModule
  ],
  exports: [RefeicaoListComponent],
  providers: [MealService]
})
export class RefeicaoListModule { }
