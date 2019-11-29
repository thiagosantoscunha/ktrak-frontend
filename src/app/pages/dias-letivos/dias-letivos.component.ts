import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { DiaLetivoService } from 'src/app/services/dia-letivo.service';
import { DiaLetivoModel } from 'src/app/core/models/dia-letivo.model';
import { Utils } from 'src/utils/utils';

@Component({
  selector: 'app-dias-letivos',
  templateUrl: './dias-letivos.component.html',
  styleUrls: ['./dias-letivos.component.scss']
})
export class DiasLetivosComponent implements OnInit {

  turmas: TurmaModel[] = [];
  diasLetivos: DiaLetivoModel[] = [];
  turma: TurmaModel;


  constructor(private turmaService: TurmaService, private diaLetivoService: DiaLetivoService) { }

  ngOnInit() {
    this.findAllTurma();
  }

  findAllTurma() {
    this.turmaService.findAll().subscribe((turmas: TurmaModel[]) => {
      this.turmas = turmas;
    }, error => console.error(error));
  }

  findByTurma() {
    this.diaLetivoService.findByTurma(this.turma).subscribe((diasLetivos: DiaLetivoModel[]) => {
      this.diasLetivos = diasLetivos;
    }, error => console.error(error));
  }

  setTurma(t: TurmaModel) {
    this.turma = t;
    for (const t of this.turmas) {
      if (t.isSelected == true) {
        t.isSelected = false;
      }
    }
    this.turma.isSelected = true;
    this.findByTurma();
  }

  turmaNaoEstaVazia(): boolean {
    return this.turmas.length > 0;
  }

  getFirstLastName(value: string): string {
    return Utils.getFirstLastName(value);
  }

  temDiaLetivo(): boolean {
    return this.diasLetivos.length > 0;
  }



}
