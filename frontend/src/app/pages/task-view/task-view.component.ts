import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any;
  tasks: any;

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


}
