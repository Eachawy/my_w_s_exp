import { Component, OnInit, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { MaterializeAction } from 'angular2-materialize';
import '../../../../assets/js/corejs.js';
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
    pubCore.hideprogress();
    
    this.size();

  }

  size() {
    var H = $(window).height();
    var head = $('nav').outerHeight();
    var footer = $('footer').outerHeight();
    var content = H - (head + footer);
    $('._body').height(content - 1);
  }

}
