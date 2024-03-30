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

export interface AddReviewValuesInterface {
  name: string
  email: string
  role: 'project_manager' | 'developer' | 'designer' | 'other' | ''
  review: string
  rating: number
  date: Date
}

export interface TokensInterface {
  access_token: string
  refresh_token: string
}

export interface LogOutPayloadInterface {
  access_token: string
}

export interface ReviewPayloadInterface {
  id?: number
  name: string
  email: string
  role: string
  review: string
  rating: number
  date: Date
}
