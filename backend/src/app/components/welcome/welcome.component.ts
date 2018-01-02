import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { user } from '../../models/user';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  Userview: user [];
  news: New;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.Userview = users;
    });
  }
  deleteuser(event, user) {
    this.usersService.deleteuser(user);
  }
  edituser(event, user){
    this.usersService.userToEdit = user;
    this.usersService.editstate = true;
    this.router.navigate(['/adduser']);
  }
}




interface New {
  userId: number;
  id: number;
  title: string;
  body: string;
}