import { UsersService } from './users.service';
import { Component } from '@angular/core';
import { person } from './interfaces'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name="";
  data:person[]=[];
  constructor(private user: UsersService) {
    this.user.getData().subscribe(data => {
      this.data = data;
    });
  }
  setName(val: string)
  {
    this.name = val;
  }
}
