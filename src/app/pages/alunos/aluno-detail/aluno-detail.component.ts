import { HttpErrorResponse } from '@angular/common/http';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/services/alunos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.scss']
})
export class AlunoDetailComponent implements OnInit {

  aluno: AlunoModel;
  private sub: any;
  id: number;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getById();
    });
  }

  getById() {
    this.alunoService.findById(this.id).subscribe((aluno: AlunoModel) => {
      this.aluno = aluno;
      console.log(this.aluno);
    }, (error: HttpErrorResponse) => {
        console.log(error);
        console.error(error.error.message);
    });
  }

}
