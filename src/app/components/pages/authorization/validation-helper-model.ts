export const signUpValidationMessages = {
  'email': [
    {type: 'required', message: 'AUTH.REQUIRED_FIELD'},
    {type: 'pattern', message: 'AUTH.INVALID_EMAIL'},
    {type: 'exists', message: 'AUTH.EXISITNG_USER_WITH_EMAIL'}
  ],
  'confirm_password': [
    {type: 'required', message: 'AUTH.PASSWORD'},
    {type: 'areEqual', message: 'AUTH.PASSWORDS_NOT_MATCH'},
    {type: 'minlength', message: 'AUTH.MIN_LENGTH_PASSWORD'}
  ],
  'password': [
    {type: 'required', message: 'AUTH.REQUIRED_FIELD'},
    {type: 'minlength', message: 'AUTH.MIN_LENGTH_PASSWORD'},
  ]
};

export const signInValidationMessages = {
  'email': [
    {type: 'required', message: 'AUTH.REQUIRED_FIELD'},
    {type: 'pattern', message: 'AUTH.INVALID_EMAIL'}
  ],
  'password': [
    {type: 'required', message: 'AUTH.REQUIRED_FIELD'},
    {type: 'minlength', message: 'VALIDATION.PASSWORD'},
  ]
};

export const forgotPasswordValidationMessages = {
  'email': [
    {type: 'required', message: 'AUTH.REQUIRED_FIELD'},
    {type: 'pattern', message: 'AUTH.INVALID_EMAIL'},
    {type: 'not-exist', message: 'AUTH.NOT_EXISITNG_USER_WITH_EMAIL'}
  ]
};

export const resetPassValidationMessages = {
  'password': [
    {type: 'required', message: 'AUTH.REQUIRED_FIELD'},
    {type: 'minlength', message: 'AUTH.MIN_LENGTH_PASSWORD'},
    {type: 'areEqual', message: 'AUTH.PASSWORDS_NOT_MATCH'},
  ]
};

export const emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
