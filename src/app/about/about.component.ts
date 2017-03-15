import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users: User[];
  constructor(private service: UserService) {
  }

  ngOnInit() {
    this.service.getUsers().then(users => this.users = users);

  }
}
