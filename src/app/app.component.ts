import { Component, OnInit } from '@angular/core';
import { Todo } from './_interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Task List';
  taskList: Todo[] = [];
  
  ngOnInit(): void {
    if(localStorage.getItem('my_tasks')) {
      this.taskList = JSON.parse(localStorage.getItem('my_tasks'));
    }
  }

  updateTaskList(): void{
    this.taskList = JSON.parse(localStorage.getItem('my_tasks'));
  }

}
