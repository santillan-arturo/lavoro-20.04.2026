import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem {
  name: string; // <-- aggiunta la proprietà name
  constructor() { 
    this.name = 'Felipe'; // setta il nome nel costruttore
  }
}
