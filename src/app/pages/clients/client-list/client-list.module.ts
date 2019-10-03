import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list.component';
import { ClientRoutingModule } from '../clients-routing.module';
import { ClientFormComponent } from '../client-form/client-form.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { ClientFormModule } from '../client-form/client-form.module';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { ClientService } from 'src/app/services/client.service';
import { ClientListWidgetModule } from 'src/app/components/widgets/client-list-widget/client-list-widget.module';


@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientFormModule,
    HeaderContentPageModule,
    DataTableModule,
    ClientListWidgetModule
  ],
  providers: [ClientService]
})
export class ClientListModule { }
