export interface FormsInterface {
  submitButtonIsDisabled: boolean
}

export interface AuthenticationFormsInterface extends FormsInterface {
  setIsSignIn: (value: boolean) => void
}
