import { Component, OnInit, Input } from '@angular/core';
import { ClientModel } from 'src/app/core/models/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list-widget',
  templateUrl: './client-list-widget.component.html',
  styleUrls: ['./client-list-widget.component.scss']
})
export class ClientListWidgetComponent implements OnInit {

  @Input()
  public data: ClientModel[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public sizeData(): number {
    if (this.data != null) {
      return this.data.length;
    } else {
      return 0;
    }
  }

  public search(event: any): void {
    event.preventDefault();
    const criteria = event.target.value;
    if (criteria !== undefined && criteria !== '') {
      const datas = this.data.filter((c) => c.nome === criteria);
      this.data = datas;
    }
  }

  public edit(client: ClientModel): void {
    this.router.navigate(['/clients/edit', client.id]);
  }

}
