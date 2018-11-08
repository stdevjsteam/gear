// import {Directive, DoCheck, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';
// import {AbstractControl} from '@angular/forms';
// import {NgClass} from '@angular/common';
//
// @Directive({
//   selector: '[toggleErrText]',
//   providers: [ NgClass ]
// })
// export class ToggleErrTextDirective implements DoCheck {
//
//   @Input()
//   control: AbstractControl;
//
//   @Input()
//   errClass: string;
//
//   @Input()
//   errType: string;
//
//   @HostBinding('hidden')
//   isHidden = true;
//
//   constructor(private renderer: Renderer2, private hostElement: ElementRef) {
//   }
//
//   ngDoCheck(): void {
//     if (this.control.hasError(this.errType) && this.control.touched && this.control.dirty || this.control.pending) {
//       this.isHidden = false;
//       this.renderer.addClass(this.hostElement.nativeElement, this.errClass);
//     } else if (this.control.valid) {
//       this.isHidden = true;
//       this.renderer.removeClass(this.hostElement.nativeElement, this.errClass);
//     } else {
//       this.isHidden = true;
//       this.control.markAsUntouched();
//     }
//   }
// }
