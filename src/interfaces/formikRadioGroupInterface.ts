import { ChangeEvent } from 'react'

interface RadioGroupOptions {
  label?: string
  name: string
  value?: string
}

export interface FormikRadiogroupInterface {
  label?: string
  name: string
  options: RadioGroupOptions[]
  translationKeyPrefix: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  error: boolean | undefined
  helperText: string | false | undefined
}
