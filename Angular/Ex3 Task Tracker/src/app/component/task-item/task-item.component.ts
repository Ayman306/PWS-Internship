import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();
    // tasks:Task[]=TASKS;
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }
  onToggle(task:any){
    this.onToggleReminder.emit(task);
  }

}
