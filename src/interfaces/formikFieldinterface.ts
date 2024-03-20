import { ChangeEvent } from 'react'
import { FormikErrors } from 'formik'

export interface FormikFieldInterface {
  label: string
  type?: string
  name: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<any>>
  value: string
  error: boolean | undefined
  helperText: string | false | undefined
}
