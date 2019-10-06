import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MealService } from 'src/app/services/meal.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MealModel } from 'src/app/core/models/meal.model';
import { HttpErrorResponse } from '@angular/common/http';

import * as _ from 'lodash';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-registrator',
  templateUrl: './registrator.component.html',
  styleUrls: ['./registrator.component.scss']
})
export class RegistratorComponent implements OnInit {

  registratorForm: FormGroup;

  meal: MealModel;
  meals: MealModel[];
  mensagem: string;

  @ViewChild('modalMessage', { read: true, static: true })
  public modalMessage: ModalComponent;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private mealService: MealService) { }

  ngOnInit() {
    this.authService.logout();
    this.getMealByData();
    this.registratorForm = this.formBuilder.group({
      clientNumero: this.formBuilder.control('')
    });
  }

  getMealByData() {
    this.mealService.getByData(new Date('2019/10/06')).subscribe((meals: MealModel[]) => {
      if (meals) {
        this.meals = meals;
      }
    }, (error: HttpErrorResponse) => {
      alert(error.error.mensagem);
    });
  }

  register(): void {
    const clientNumero = this.registratorForm.value.clientNumero;
    console.log(clientNumero);
    this.mealService.insert(clientNumero).subscribe((result: MealModel) => {
      if (result) {
        this.meal = result;
        this.mensagem = null;
        if (this.meals !== null) {
          this.meals.unshift(this.meal);
        }
      }
    }, (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.mensagem = error.error.mensagem;
          this.showDialogMessage('Erro no sistema', error.error.mensagem);
        }
    }, () => {
    });
    this.resetInput();
  }

  resetInput() {
    setTimeout(() => {
      this.registratorForm.reset(this.registratorForm.value.clientNumero);
    }, 1000);
  }

  showDialogMessage(title: string, message: string) {
    this.modalMessage = new ModalComponent();
    this.modalMessage.show = true;
    this.modalMessage.title = title;
    this.modalMessage.description = message;
  }

}
