import { Component, OnInit } from '@angular/core';
import { AuthonService } from '../../services/authon.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authonService: AuthonService, private router: Router) { }

  ngOnInit() {
  }

  getuser(user, pass) {
    if (user === 'admin' && pass === '123456') {
      this.authonService.setuserloggedin();
      console.log(this.authonService.getuserloggedin());
      this.router.navigate(['welcome']);
    }
    return false;
  }
}
