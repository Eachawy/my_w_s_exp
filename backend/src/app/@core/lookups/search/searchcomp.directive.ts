import { Component, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };

@Component({
  selector: 'appSearchcomp',
  template: `
      <div class="input-field col s{{colw}}">
            <input type="text" placeholder="{{pholder}}" [(ngModel)]="value" [ngModelOptions]='{standalone: true}' >
            <label>{{lbl}}</label>
    </div>

    <button (click)="fireaction($event)">Search</button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Searchcomp),
      multi: true
    }
  ]
})
export class Searchcomp implements ControlValueAccessor{

  @Input() pholder: string = 'hellow';
  @Input() lbl: string = 'welcome';
  @Input() colw: string = '4';

  @Output() onsearch = new EventEmitter();

  fireaction(e) {
    this.onsearch.emit(e);
  }






  //The internal data model
  private innerValue: any = '';
  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  //get accessor
  get value(): any { return this.innerValue; };
  //set accessor including call the onchange callback
  set value(v: any) { if (v !== this.innerValue) { this.innerValue = v; this.onChangeCallback(v); } }
  //Set touched on blur
  onBlur() { this.onTouchedCallback(); }
  //From ControlValueAccessor interface
  writeValue(value: any) { if (value !== this.innerValue) { this.innerValue = value; } }
  //From ControlValueAccessor interface
  registerOnChange(fn: any) { this.onChangeCallback = fn; }
  //From ControlValueAccessor interface
  registerOnTouched(fn: any) { this.onTouchedCallback = fn; }


}
