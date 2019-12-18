import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './listagem/listagem.component';
import { BuscaComponent } from './busca/busca.component';
import { TarefaComponent } from './tarefa/tarefa.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path:'home', component: HomeComponent },
  { path:'busca', component: BuscaComponent},
  { path:'listagem', component: ListagemComponent },
  { path:'tarefa', component: TarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
