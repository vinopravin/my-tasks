import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks;
  @Output('taskRemoved') taskRemoved : EventEmitter<any> = new EventEmitter();
  searchText: string = '';

  removeTask(_id: number) {
    this.tasks = this.tasks.filter((element) =>  element._id != _id);
    localStorage.setItem('my_tasks', JSON.stringify(this.tasks))
    this.taskRemoved.emit()
  }

  markAsCompleted(_id, event){
    this.tasks.forEach((element) => {
      if(element._id == _id) {
        element.is_completed = !event
      }
    });
    
    localStorage.setItem('my_tasks', JSON.stringify(this.tasks))
  }

}
