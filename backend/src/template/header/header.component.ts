import { Component, OnInit } from '@angular/core';

//import { publiccorejs }  from '../../../assets/js/publicjs.js';
import '../../assets/js/corejs.js';
declare var pubCore:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titlepage = 'My WebSite';

  constructor() {  }

  ngOnInit() {
    pubCore.hideprogress()
    //console.log(pubCore);
  }

}
