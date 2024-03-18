import { ChangeEvent } from 'react'

export interface FormikFieldInterface {
  label: string
  type?: string
  name: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  error: boolean | undefined
  helperText: string | false | undefined
}
