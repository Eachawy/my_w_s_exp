import { Component, OnInit, EventEmitter } from '@angular/core';

//import { publiccorejs }  from '../../../assets/js/publicjs.js';
import * as $ from 'jquery';
import { MaterializeAction } from 'angular2-materialize';
import '../../assets/js/corejs.js';
declare var pubCore:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titlepage = 'My WebSite';
  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor() {  }

  ngOnInit() {
    pubCore.hideprogress()
    //console.log(pubCore);
  }

  closeslidnav() {
    //this.modalActions.emit({ action: "sideNav", params: ['hide'] });
    //$('#slid-out').addClass('SNavhiden');
  }

}
