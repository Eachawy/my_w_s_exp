import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthonService } from '../../@core/services/authon/authon.service';
import { UsersService } from '../../@core/services//users/users.service';
import { user } from '../../@core/models/user/user';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

 

  constructor(private usersService: UsersService, private router: Router, private auth: AuthonService) { }

  ngOnInit() {
    console.log(this.auth.getuserloggedin());

  }


}

