import { Component ,Output,EventEmitter} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() submitForm:EventEmitter<Task>=new EventEmitter()
  text!:string
  day!:string
  reminder!:boolean
  showAddTask!:boolean;
  subscription!:Subscription;


  constructor(private uiServices:UiService){
    this.subscription=uiServices
    .onToggle()
    .subscribe((value)=>{
      this.showAddTask=value
    })
  }

  
  onSubmit(){
    if(!this.text){
      alert("Please enter task")
      return
    }
    const newTask:Task={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.submitForm.emit(newTask)

    this.text="",
    this.day="",
    this.reminder=false
  }
}
