export interface AuthenticationComponentsInterface {
  setAuthenticationIsOpen: (value: boolean) => void
}

export interface SignUpSignInInterface {
  setIsSignIn: (value: boolean) => void
  setAuthenticationIsOpen: (value: boolean) => void
}

export interface SignUpPayloadInterface {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface SignUpValuesInterface extends SignUpPayloadInterface {
  confirmPassword: string
}

export interface SignInPayloadInterface {
  email: string
  password: string
}

export interface TokensInterface {
  access_token: string
  refresh_token: string
}

export interface LogOutPayloadInterface {
  access_token: string
}
