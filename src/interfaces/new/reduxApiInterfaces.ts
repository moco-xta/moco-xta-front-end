export interface SignInPayloadInterface {
  email: string
  password: string
}

export interface AddReviewValuesInterface {
  review: string
  role: 'project_manager' | 'developer' | 'designer' | 'other' | ''
  rating: number
  date: Date
}