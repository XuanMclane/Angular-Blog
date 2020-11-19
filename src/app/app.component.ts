import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = ['Sam', 'Peter', 'Bruce', 'David']
  people = [
    { name: 'Sam', age: 20},
    { name: 'Tony', age: 21},
    { name: 'Peter', age: 22},
    { name: 'Bruce', age: 23}
  ]
}
