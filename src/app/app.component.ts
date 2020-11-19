import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  color="green";
  err = true
  updateColor() 
  {
    this.color = "blue"
    this.err = !this.err
  }
}
