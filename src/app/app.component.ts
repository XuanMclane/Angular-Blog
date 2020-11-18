import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'Bruce';
  getName()
  {
    return this.name
  }
  obj = {
    name: 'kelly',
    age: 20
  }
  arr=['bruce', 'tony', 'GET']
  siteUrl = window.location.href
}
