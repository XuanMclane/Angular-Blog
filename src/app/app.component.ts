import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  users= [
    {
      name: "Bruce",
      age: 20,
      email: "bruceli@gmail.com"
    },
    {
      name: "Tony",
      age: 21,
      email: "tony@gmail.com"
    },
    {
      name: "Peter",
      age: 22,
      email: "peter@gmail.com"
    }
  ]
  
}
