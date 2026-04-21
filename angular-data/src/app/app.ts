import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItem } from './user-item/user-item';
import { UserListComponent } from './user-list-component/user-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserItem, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-data');
}
