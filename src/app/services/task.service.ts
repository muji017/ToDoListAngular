import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
// import { SamInterceptor } from './sam-interceptor';
import {Observable} from 'rxjs'
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http:HttpClient) { }
  
  private endPoint='/tasks'

  getTask():Observable<Task[]>{
   return this.http.get<Task[]>(this.endPoint)
  }
  deleteTask(task:Task):Observable<Task>{
    const url=`${this.endPoint}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateReminder(task:Task):Observable<Task>{
    const url=`${this.endPoint}/${task.id}`
    return this.http.put<Task>(url,task)
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.endPoint,task)
  }
}
