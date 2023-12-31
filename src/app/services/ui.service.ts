import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTaask:boolean=false;
  private subject=new Subject<any>();

  constructor() { }

  toggleAddTask():void{
    this.showAddTaask=!this.showAddTaask
    this.subject.next(this.showAddTaask)
  }
  
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
