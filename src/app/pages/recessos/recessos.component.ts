import { Component, OnInit, ViewChild } from '@angular/core';
import { RecessoModel } from 'src/app/core/models/recesso.model';
import { RecessoService } from 'src/app/services/recesso.service';
import { Router } from '@angular/router';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-recessos',
  templateUrl: './recessos.component.html',
  styleUrls: ['./recessos.component.scss']
})
export class RecessosComponent implements OnInit {

  recessos: RecessoModel[] = [];

  @ViewChild('alert', { static: true })
  alert: AlertDialogComponent;

  constructor(private recessoService: RecessoService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.recessoService.findAll().subscribe((recessos: RecessoModel[]) => {
      this.recessos = recessos;
    }, error => console.error(error));
  }

  goToEdit(r: RecessoModel) {
    this.router.navigate(['/recessos/edita', r.id]);
  }

  novoRecesso() {
    this.router.navigate(['/recessos/novo']);
  }

  temRecesso(): boolean {
    return this.recessos.length > 0;
  }

  remove(r: RecessoModel) {
    this.recessoService.deleteById(r.id).subscribe((r) => {
      this.alert.build('Sucesso', 'Sucesso ao remover', 'success');
      this.findAll();
    }, error => console.error(error));
  }

  

}
