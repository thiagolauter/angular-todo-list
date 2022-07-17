import { Injectable } from '@angular/core'

import { Task } from "./"

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  listAll(): Task[] {
    const tasks = localStorage['tasks']
    return tasks ? JSON.parse(tasks) : []
  }

  create(task: Task): void {
    const tasks = this.listAll()
    task.id = new Date().getTime()
    tasks.push(task)
    localStorage['tasks'] = JSON.stringify(tasks)
  }

  searchById(id: number): Task {
    const tasks: Task[] = this.listAll()
    return tasks.find(task => task.id === id)
  }

  edit(task: Task): void {
    const tasks: Task[] = this.listAll()
    tasks.forEach((obj, index, objs)=>{
      if (task.id === obj.id) {
        objs[index] = task
      }
    })
    localStorage['tasks']
  }

  remove(id: number): void{
    let tasks: Task[] = this.listAll()
    tasks = tasks.filter(task => task.id !== id)
    localStorage['tasks'] = JSON.stringify(tasks)
  }

  changeDoneStatus(id: number): void {
    const tasks: Task[] = this.listAll()
    tasks.forEach((obj, index, objs) => {
      objs[index].done = !obj.done
    })
    localStorage['tasks'] = JSON.stringify(tasks)
  }
}
