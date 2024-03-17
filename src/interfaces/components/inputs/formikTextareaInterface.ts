import { ChangeEvent } from 'react'

export interface FormikTextareaInterface {
  label: string
  name: string
  cols: number
  rows: number
  maxLength: number
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  error: boolean | undefined
  helperText: string | false | undefined
}
