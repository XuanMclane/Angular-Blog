import { UsersService } from './users.service';
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
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
  constructor(
    private user: UsersService,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
    this.user.getData().subscribe(data => {
      this.data = data;
    });
  }
  setName(val: string)
  {
    this.name = val;
  }
  async loadAdmin()
  {
    this.vcr.clear();
    const { AdminListComponent } = await import('./admin-list/admin-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    )
  }
  async loadUser()
  {
    this.vcr.clear();
    const { UserListComponent } = await import('./user-list/user-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    )
  }
  onSubmit(data:any)
  {
    console.log(data)
  }
}
