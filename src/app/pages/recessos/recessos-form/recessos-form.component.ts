import { Component, OnInit, ViewChild } from '@angular/core';
import { RecessoModel } from 'src/app/core/models/recesso.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecessoService } from 'src/app/services/recesso.service';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-recessos-form',
  templateUrl: './recessos-form.component.html',
  styleUrls: ['./recessos-form.component.scss']
})
export class RecessosFormComponent implements OnInit {

  recesso: RecessoModel = new RecessoModel();

  @ViewChild('alert', { static: true })
  alert: AlertDialogComponent;


  constructor(private route: ActivatedRoute, private recessoService: RecessoService, private router: Router) { }

  ngOnInit() {
  }

  getParam() {
    this.route.params.subscribe((param) => {
      this.recesso.id = +param['id'];
      this.findById();
    }, error => console.error(error));
  }

  findById() {
    this.recessoService.findById(this.recesso.id).subscribe((recesso: RecessoModel) => {
      this.recesso = recesso;
    }, error => console.error(error));
  }

  salvar() {
    if (this.recesso.id == null || this.recesso.id == undefined) {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.recessoService.insert(this.recesso).subscribe((recesso: RecessoModel) => {
      this.alert.build('Sucesso', 'Sucesso ao inserir o recesso', 'success');
      this.alert.openDialog();
      this.router.navigate(['/recessos']);
    }, error => {
      this.alert.build('Error', error.error.message, 'danger');
      this.alert.openDialog();
    });
  }

  update() {
    this.recessoService.update(this.recesso).subscribe((recesso: RecessoModel) => {
      this.alert.build('Sucesso', 'Sucesso ao altualizar o recesso', 'success');
      this.alert.openDialog();
      this.router.navigate(['/recessos']);
    }, error => {
      this.alert.build('Error', error.error.message, 'danger');
      this.alert.openDialog();
    });
  }

}
