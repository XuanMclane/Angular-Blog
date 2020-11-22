import { UsersService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name="";
  data=[];
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
