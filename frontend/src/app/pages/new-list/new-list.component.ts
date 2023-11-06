import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent {

  constructor(private taskService: TaskService, private router: Router) {}

  createList(title: string) {
    this.taskService.createList(title).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          // Navigate to /lists/response._id
          this.router.navigate(['/lists', response._id])
        },
        error: error => {
          console.log(error);
        }
      }
    );

  }
}
