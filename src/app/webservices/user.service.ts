import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  recuperaListaDeUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  recuperaUserPeloID(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
    
    /* forma alternativa usando expression language
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    */
    
  }
}
