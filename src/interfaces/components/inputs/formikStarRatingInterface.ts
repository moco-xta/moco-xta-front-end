import { ChangeEvent } from 'react'

export interface FormikStarRatingInterface {
  name: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: number
  error: boolean | undefined
  helperText: string | false | undefined
}
