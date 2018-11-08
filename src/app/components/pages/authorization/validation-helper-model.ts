export const signUpValidationMessages = {
  'email': [
    {type: 'required', message: 'Please enter your email'},
    {type: 'pattern', message: 'Enter a valid email'}
  ],
  'confirm_password': [
    {type: 'required', message: 'Please confirm your password'},
    {type: 'areEqual', message: 'Password mismatch'},
    {type: 'minlength', message: 'Password must be at least 6 characters long'}
  ],
  'password': [
    {type: 'required', message: 'Please enter your password'},
    {type: 'minlength', message: 'Password must be at least 6 characters long'},
  ]
};

export const signInValidationMessages = {
  'email': [
    {type: 'required', message: 'Please enter your email'},
    {type: 'pattern', message: 'Enter a valid email'}
  ],
  'password': [
    {type: 'required', message: 'Please enter your password'},
    {type: 'minlength', message: 'Password must be at least 6 characters long'},
  ]
};

export const forgotPasswordValidationMessages = {
  'email': [
    {type: 'required', message: 'Please enter your email'},
    {type: 'pattern', message: 'Enter a valid email'},
    {type: 'not-exist', message: 'There are no user with this email'}
  ]
};

export const resetPassValidationMessages = {
  'password': [
    {type: 'required', message: 'Please enter your password'},
    {type: 'minlength', message: 'Password must be at least 6 characters long'},
    {type: 'wrong-password', message: 'Your current password are wrong'},
  ]
};

export const emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
