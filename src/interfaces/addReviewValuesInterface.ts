export interface AddReviewValuesInterface {
  name: string
  email: string
  role: 'project_manager' | 'developer' | 'designer' | 'other' | ''
  review: string
  rating: number
  date: Date
}
