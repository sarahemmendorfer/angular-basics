import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
    tarefas: string[] = [];
    tarefaAtual: string = "";


  addTarefa(){
    
    this.tarefas.push(this.tarefaAtual);
    this.tarefaAtual = "";
  } 

  deletarTarefa(id: number) {
    if (confirm('Você quer mesmo excluir esta tarefa?')) {
      this.tarefas.splice(id, 1)
    }
  }
}


