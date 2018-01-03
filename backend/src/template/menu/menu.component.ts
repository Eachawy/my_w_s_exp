import { Component, OnInit, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  routeNames = ['Users'];
  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor() { }

  ngOnInit() {
         
  }

  closeSnav(): any{
    setTimeout(() => {
      $('#sidenav-overlay').remove();
    }, 250);
    
  }

}
