import {NgModule} from '@angular/core';
import {ErrorMessageClassDirective} from './error-message-class.directive';

@NgModule({
  declarations: [
    ErrorMessageClassDirective
  ],
  exports: [
    ErrorMessageClassDirective
  ]
})
export class DirectiveModule {
}
