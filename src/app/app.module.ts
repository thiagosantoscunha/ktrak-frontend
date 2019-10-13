import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './shared/navigation/navigation.module';
import { PagesModule } from './pages/pages.module';
import { MenuSidebarModule } from './shared/menu-sidebar/menu-sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { StoreModule } from '@ngrx/store';
import { alunoReducer } from './reducers/aluno.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      aluno: alunoReducer
    }),
    NavigationModule,
    PagesModule,
    MenuSidebarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
