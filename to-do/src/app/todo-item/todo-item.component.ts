
import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  concluido: boolean = false

  @Input()
  tarefa: string = ''

  @Output()
  deletar: EventEmitter<any> = new EventEmitter<any>()

  deletarTodo() {
    this.deletar.emit()
  }
}