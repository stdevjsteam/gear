import {Component, Input, forwardRef, AfterViewInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './ng-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgSelectComponent),
      multi: true
    }
  ]
})
export class NgSelectComponent implements ControlValueAccessor, AfterViewInit {
  @Input() _selectValue;
  @Input() items: Array<any>;
  @Input() disabled: boolean;
  @Input() placehold: string;
  @Input() loading: boolean;
  @Input() enableScroll = false;
  @Input() onCloseEvent;
  @Input() onChangeEvent;
  @Input() multiple: boolean;
  @Input() searchable = true;
  @Input() clearable = true;

  get selectValue() {
    return this._selectValue;
  }

  set selectValue(val) {
    this._selectValue = val;
    this.propagateChange(this._selectValue);
  }
  constructor() {
  }

  ngAfterViewInit() {
    if (this.onCloseEvent !== undefined) {
      this.onCloseHandler = this.onCloseEvent;
    }
    if (this.onChangeEvent !== undefined) {
      this.onChangeHandler = this.onChangeEvent;
    }
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.selectValue = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  onCloseHandler = () => {
    };

  onOpenHandler = () => {
    };

  registerOnTouched() {}

  onChangeHandler() {
  }

}
