import { Component, OnInit } from '@angular/core';
import { HeaderComponent} from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { MenuComponent } from '../../menu/menu.component';


@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
