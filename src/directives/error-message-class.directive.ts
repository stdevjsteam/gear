import {Directive, DoCheck, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {NgClass} from '@angular/common';

@Directive({
  selector: '[toggleErrClass]',
  providers: [NgClass]
})
export class ErrorMessageClassDirective implements DoCheck {

  @Input()
  control: AbstractControl;

  @Input()
  errClass: string;

  @HostBinding('class.className') className;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

  ngDoCheck(): void {
    if (this.control.errors && this.control.touched && this.control.dirty || this.control.pending) {
      this.renderer.addClass(this.hostElement.nativeElement, this.errClass);
    } else if (this.control.valid) {
      this.renderer.removeClass(this.hostElement.nativeElement, this.errClass);
    } else {
      this.control.markAsUntouched({onlySelf: true});
    }
  }
}
