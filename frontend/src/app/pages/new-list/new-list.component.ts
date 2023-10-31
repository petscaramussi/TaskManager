import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent {

  constructor(private taskService: TaskService) {}

  createList(title: string) {
    this.taskService.createList(title).subscribe(
      {
        next: response => {
          console.log(response);
          console.log('foi');
        },
        error: error => {
          console.log(error);
        }
      }
    );
  }
}
