export interface SignInPayloadInterface {
  email: string
  password: string
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

export interface AddReviewValuesInterface {
  review: string
  role: 'project_manager' | 'developer' | 'designer' | 'other' | ''
  rating: number
  date: Date
}

export interface ReviewPayloadInterface {
  id?: number
  firstName: string
  role: string
  review: string
  rating: number
  date: Date
}
