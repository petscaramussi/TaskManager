import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit{

  listId: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('listId');
    console.log(this.listId)
  }

  createTask(title: string) {
    this.taskService.createTask(title, this.listId).subscribe({
      next: (newTask: any) => {
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    });
  }
}
