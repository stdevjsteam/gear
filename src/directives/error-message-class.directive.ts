import {Directive, DoCheck, ElementRef, HostBinding, Input, OnChanges, Renderer2} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Directive({
  selector: '[toggleErrClass]'
})
export class ErrorMessageClassDirective implements OnChanges {

  @Input()
  formControlElement: AbstractControl;

  @HostBinding('class.className') className;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

  ngOnChanges() {
    if (this.formControlElement.errors && this.formControlElement.touched) {
      this.renderer.addClass(this.hostElement.nativeElement, 'invalid');
    } else if (this.formControlElement.valid) {
      this.renderer.removeClass(this.hostElement.nativeElement, 'invalid');
    } else {
      this.formControlElement.markAsUntouched();
    }
  }
}

