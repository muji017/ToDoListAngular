import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = 'TO DO LIST';
  showAddTask!:boolean;
  subscription!:Subscription;

  constructor(private uiServices:UiService,private router:Router){
    this.subscription=this.uiServices
    .onToggle()
    .subscribe((value)=>{
      this.showAddTask=value
    })
  }

  toggle(){
     this.uiServices.toggleAddTask()
  }
  hasRouter(route:string){
    return this.router.url===route
  }
}
