import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { user } from '../../models/user'

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
  
  constructor(private usersService: UsersService) { }

  ngOnInit() {
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
