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

 

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {

  }


}

