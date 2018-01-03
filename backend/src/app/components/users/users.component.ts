import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { user } from '../../models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class AddUserComponent implements OnInit {

  User : user = {id:'', name : '', username : '', password : ''}
  editstate: boolean = false;
  Userview: user[];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    // this.usersService.getUsers().subscribe((users) => {
    //   this.Userview = users;
    // });
    // this.User = this.usersService.AnthUser;
    // console.log(this.User);
  }
  goback(){
    this.router.navigate(['welcome']);
  }
  onSubmit(){

    if (this.editstate){
      this.usersService.edituser(this.User);
      this.editstate = false;
      this.User.name = '';
      this.User.username = '';
      this.User.password = '';
    }else{
      if (this.User.name != '' && this.User.username != '' && this.User.password != '') {
        this.usersService.addUser(this.User);
        this.User.name = '';
        this.User.username = '';
        this.User.password = '';
      }
    }




  }

  deleteuser(event, user) {
    this.usersService.deleteuser(user);
  }

  edituser(event, user) {
    this.editstate = true;
    this.User.id = user.id;
    this.User.name = user.name;
    this.User.username = user.username;
    this.User.password = user.password;
    //this.router.navigate(['/adduser']);
  }

}
