import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TaskService } from './shared'
import { ListTasksComponent } from './list'

@NgModule({
  declarations: [
    ListTasksComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [TaskService]
})

export class TasksModule { }
