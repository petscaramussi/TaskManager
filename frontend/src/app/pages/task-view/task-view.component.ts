import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[] = [];
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.taskService.getLists().subscribe({
      next: (lists: any) => this.lists = lists
    });

    this.route.params.subscribe({
      next: (params: Params) => {
        console.log(params);
        if (params['listId'] != null) {
          this.taskService.getTasks(params['listId']).subscribe({
            next: (tasks: any) => this.tasks = tasks
          })
        }
      }
    });
  }

  onTaskClick(task: Task) {
    // set task to completed
    this.taskService.complete(task).subscribe(() => {
      // the task has been set to completed successfully
      task.completed = !task.completed;

    });
  }


}
