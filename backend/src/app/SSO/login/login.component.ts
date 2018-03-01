import { Component, OnInit } from '@angular/core';
import { AuthonService } from '../../@core/services/authon/authon.service';
import { UsersService } from '../../@core/services//users/users.service';
import { Router } from '@angular/router';
import { user } from '../../@core/models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  dUser: user [];

  constructor(private authonService: AuthonService, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((res) => {
      this.dUser = res;
    });
  }

  getuser(user, pass) {
    for(var i = 0; i < this.dUser.length; i++){
      if (user === this.dUser[i].username && pass === this.dUser[i].password) {
        this.authonService.setuserloggedin();
        this.router.navigate(['welcome']);
        return false;
      }
    }
    return false;
  }
}
