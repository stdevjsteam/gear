import {NgModule} from '@angular/core';
import {ErrorMessageClassDirective} from './error-message-class.directive';
// import {ToggleErrTextDirective} from './toggle-err-text.directive';

@NgModule({
  declarations: [
    ErrorMessageClassDirective,
    // ToggleErrTextDirective
  ],
  exports: [
    ErrorMessageClassDirective,
    // ToggleErrTextDirective
  ]
})
export class DirectiveModule {
}
