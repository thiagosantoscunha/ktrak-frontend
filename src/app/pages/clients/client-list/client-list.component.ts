import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ClientModel } from 'src/app/core/models/client.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public clients: ClientModel[];

  constructor(private clientService: ClientService, private authService: AuthService) { }

  ngOnInit() {
    this.getAll();
    this.authService.login();
  }

  public getAll(): void {
    this.clientService.getAll().subscribe((clients: ClientModel[]) => {
      this.clients = clients;
    }, (error: HttpErrorResponse) => {
      console.log(error.message, error.status);
    });
  }

}
