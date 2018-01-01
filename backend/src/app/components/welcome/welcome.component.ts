import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { user } from '../../models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  Userview: user [];
  userToEdit : user;

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.Userview = users;
    });
  }
  deleteuser(event, user) {
    this.usersService.deleteuser(user);
  }
  edituser(event, user){
    this.userToEdit = user;
    console.log(this.userToEdit);
    //this.usersService.edituser(user);
  }
}
