import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() person: any
  @Output() setName: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.setName.emit("Michael")
  }

  setData(val: string)
  {
    this.setName.emit(val);
  }
}
