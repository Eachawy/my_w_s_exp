import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'lookupselect',
  template: `
    <div class="input-field col s{{colw}}">
      <select materialize="material_select" [materializeSelectOptions]="selectOptions" (change)="selecteddata($event)">
        <option value="" disabled selected>Choose your option</option>
        <option value="{{usname.id}}" *ngFor="let usname of selectobj">{{usname.name}}</option>
      </select>
      <label>{{lbl}}</label>
    </div>
  `
})
export class SelectComponent {
  @Input() lbl: string = 'Select';
  @Input() colw: string = '4';   
  @Input() selectobj: any; // or whatever type `entry` is
  @Output() onselect = new EventEmitter();

  constructor() { }




  selecteddata($event){
    this.onselect.emit($event);
  }



}
