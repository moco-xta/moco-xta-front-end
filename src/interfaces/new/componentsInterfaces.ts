export interface AuthenticationComponentsInterface {
  authenticationIsOpen: boolean
  handleSetAuthenticationIsOpen: () => void
}

export interface SignUpSignInInterface {
  setIsSignIn: (value: boolean) => void
  handleSetAuthenticationIsOpen: () => void
}