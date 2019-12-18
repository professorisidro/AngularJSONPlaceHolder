import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  public getTarefaById(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/"+id);
  }
}
