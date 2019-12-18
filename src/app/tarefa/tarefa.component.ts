import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../webservices/tarefa.service';
import { Task } from '../model/Task';
import { User } from '../model/User';
import { UserService } from '../webservices/user.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  idTarefa:number;  // por conta do NGModel
  idUser:number;    // quero buscar o User

  _myTask: Task;
  _user: User;


  constructor(private tarefaSrv: TarefaService, 
              private userSrv: UserService) { }

  ngOnInit() {
  }

  /*public buscarGeral(){
    this.buscarTarefa();
    this.buscarUser();
  }*/


  public buscarUser(){
    this.userSrv.recuperaUserPeloID(this.idUser).subscribe((res:User)=>{
       this._user = res;
    });
  }
  public buscarTarefa(){
     this.tarefaSrv.getTarefaById(this.idTarefa).subscribe((res:Task)=>{
       this._myTask = res;
       this.idUser = this._myTask.userId; // busquei a tarefa e agora quero o UserID
       this.buscarUser();
       
       console.log("ID User Recuperado = "+this.idUser);
     });
  }

}
