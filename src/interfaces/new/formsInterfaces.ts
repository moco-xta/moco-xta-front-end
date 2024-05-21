export interface FormsInterface {
  submitButtonIsDisabled: boolean
  resetButtonIsDisabled: boolean
}

export interface AuthenticationFormsInterface extends FormsInterface {
  setIsSignIn: (value: boolean) => void
}
