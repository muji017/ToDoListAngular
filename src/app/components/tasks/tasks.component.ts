import { Component } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
   tasks :Task[] =[]
   constructor(private taskService:TaskService){
     taskService.getTask().subscribe((tasks)=>(
      this.tasks=tasks
     ))
    }

     deleteTask(task:Task){
      this.taskService.deleteTask(task).subscribe(()=>{
        this.tasks=this.tasks.filter(t=>t.id!==task.id)
      }) 
     }
     reminderReset(task:Task){
      task.reminder=!task.reminder
      this.taskService.updateReminder(task).subscribe(()=>(
        this.tasks=this.tasks
      ))
      console.log( task.reminder);
      
     }
     addTask(task:Task){
       this.taskService.addTask(task).subscribe((task)=>(
       this.tasks.push(task)
       ))
     }
}
