import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { user } from '../../models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  User : user = {
    name : '',
    username : '',
    password : ''
  }
  
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {

    if (this.usersService.editstate){
      this.User.name = this.usersService.userToEdit.name;
      this.User.username = this.usersService.userToEdit.username;
      this.User.password = this.usersService.userToEdit.password;
    }

  }
  goback(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    if (this.User.name != '' && this.User.username != '' && this.User.password != ''){
        this.usersService.addUser(this.User);
        this.User.name = '';
        this.User.username = '';
        this.User.password = '';
    }
  }

}
