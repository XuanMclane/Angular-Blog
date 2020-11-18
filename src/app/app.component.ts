import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  myName = 'Bruce'
  getName(name)
  {
    alert(`My name is ${name}`)
  }
}
