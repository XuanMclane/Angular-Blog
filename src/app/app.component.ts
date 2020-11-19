import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data= {
    name: "Bruce",
    age: 20,
    email: "bruceli@gmail.com"
  }
}
