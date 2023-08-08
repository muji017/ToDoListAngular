import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent {
  faclose=faTimes
  @Input() task!:Task
  @Output() deleteItem:EventEmitter<Task>=new EventEmitter()
  @Output() reminderItemSet:EventEmitter<Task>=new EventEmitter()
  delete(task:Task){
    
    this.deleteItem.emit(task)
  }
  reminderSet(task:Task){
     this.reminderItemSet.emit(task)
  }
}
