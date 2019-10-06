import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  showModalSuporte: boolean;
  showModalSobre: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  openAtendimentoModal(): void {
    this.showModalSuporte = true;
  }

  openSobreModal(): void {
    this.showModalSobre = true;
  }

}
