import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../webservices/user.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  // Já que temos que recuperar uma lista de usuários, que tal declarar uma?
  public listaDeUsers: User[];

  // vou precisar usar o serviço que criei
  // como faço isso? Injetando!!!
  constructor(private userSrv:UserService) { }

  ngOnInit() {
    // isso nao funciona na realidade, é apenas uma forma de "compreender" o que acontece no subscribe
    //   let res: User[];
    //   res = this.userSrv.recuperaListaDeUsers();
    //   if (/*deu pra converter???*/){
    //     this.listaDeUsers = res;
    //   }

    this.userSrv.recuperaListaDeUsers().subscribe((res:User[])=>{
      this.listaDeUsers = res;
      console.log("Se tudo deu certo, na linha de baixo vem um vetor de User...");
      console.log(this.listaDeUsers);
    });
  }

}
