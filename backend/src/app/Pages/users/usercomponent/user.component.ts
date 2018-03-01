import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../@core/services/users/users.service';
import { user } from '../../../@core/models/user/user'
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Meta, Title } from '@angular/platform-browser';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-add-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class AddUserComponent implements OnInit {

  User : user;
  editstate: boolean = false;
  Userview: user[];
  autocomp: any;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    // this.usersService.getUsers().subscribe((users) => {
    //   this.Userview = users;
    // });
     this.User = this.usersService.AnthUser;

    // console.log(this.User);
    // for (let i = 0; i < this.usersService.AnthUser.length; i++){
    //   this.autocomp.push = this.usersService.AnthUser[i].name;
    // }

    
    this.autocomp = {
      'data': {
        "__": null,
        "  ": null,
      },
      onAutocomplete: (val) => {
        console.log(val);
      }
    };

  }

  // for custom component
  go(e){
    console.log(e);
  }

  selecteddata(v:any){
    console.log(v.target.value);
  }
  
  search2($event) {
    let q = $event.target.value;
    this.usersService.startAt.next(q);
    this.usersService.endAt.next(q + "\uf8ff");

    
    if (this.usersService.obj != undefined){
        this.usersService.obj.forEach((n, i) => {
          this.autocomp.data[n.name] = null;
        });
    }

  }
  clear(){
    this.User.name = '';
    this.User.username = '';
    this.User.password = '';
    this.animat('.adduserForm', '.tbview');
  }

  adduser(){
    this.animat('.tbview', '.adduserForm');
  }

  animat(hidediv,showdiv){
    $(hidediv).fadeOut(600, function () { $(showdiv).fadeIn(600); });
  }

  onSubmit(){
    if (this.editstate){
      this.usersService.edituser(this.User);
      this.editstate = false;
      this.User.name = '';
      this.User.username = '';
      this.User.password = '';
      this.animat('.adduserForm', '.tbview');
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
    this.animat('.tbview', '.adduserForm');
    this.editstate = true;
    this.User.id = user.id;
    this.User.name = user.name;
    this.User.username = user.username;
    this.User.password = user.password;
    //this.router.navigate(['/adduser']);
  }

}
