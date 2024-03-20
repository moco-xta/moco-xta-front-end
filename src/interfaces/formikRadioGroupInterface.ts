import { ChangeEvent } from 'react'
import { FormikErrors } from 'formik'

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
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<any>>
  value: string
  error: boolean | undefined
  helperText: string | false | undefined
}
