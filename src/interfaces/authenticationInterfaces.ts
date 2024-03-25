export interface SignInInterface {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface TokensInterface {
  access_token: string
  refresh_token: string
}