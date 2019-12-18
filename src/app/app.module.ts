// importações do framework do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // esse é o cara do webservice
import { FormsModule } from '@angular/forms'; // esse é o cara dos formularios

// importações específicas da minha aplicação
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TituloComponent } from './titulo/titulo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListagemComponent } from './listagem/listagem.component';
import { BuscaComponent } from './busca/busca.component';
import { TarefaComponent } from './tarefa/tarefa.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TituloComponent,
    NavbarComponent,
    ListagemComponent,
    BuscaComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
