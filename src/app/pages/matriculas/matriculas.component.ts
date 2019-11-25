import { Component, OnInit, ViewChild } from '@angular/core';
import { MatriculasService } from 'src/app/services/matriculas.service';
import { MatriculaModel } from 'src/app/core/models/matricula.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';
import { TurmaService } from 'src/app/services/turma.service';
import { TurmaModel } from 'src/app/core/models/turma.model';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.scss']
})
export class MatriculasComponent implements OnInit {

  matriculas: MatriculaModel[];
  matricula: MatriculaModel;


  @ViewChild('alert', { static: true })
  alert: AlertDialogComponent;


  constructor(
    private matriculaService: MatriculasService,
    private router: Router
  ) {
    this.matricula = new MatriculaModel();
  }

  ngOnInit() {
    this.findAll();

  }

  findAll() {
    this.matriculaService.findAll().subscribe((matriculas: MatriculaModel[]) => {
      this.matriculas = matriculas;
      console.log(this.matriculas);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  remove(event: boolean) {
    if (event === true) {
      this.matriculaService.deleteById(this.matricula.id).subscribe((resp: any) => {
        this.findAll();
      }, (error: HttpErrorResponse) => {
        this.alert.build('Error', error.error.message, 'danger');
        this.alert.openDialog();
        console.error(error);
      });
    }
  }

  initRemove(matricula: MatriculaModel) {
    this.matricula = matricula;
    this.alert.build('Atenção', 'Gostaria de remover esta matrícula?', 'warning', true);
    this.alert.openDialog();
  }

  goToEdit(m: MatriculaModel) {
    this.router.navigate(['/matriculas/edita', m.id]);
  }



}
