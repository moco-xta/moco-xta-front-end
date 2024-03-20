import { ChangeEvent } from 'react'
import { FormikErrors } from 'formik'

export interface FormikTextareaInterface {
  label: string
  name: string
  cols: number
  rows: number
  maxLength: number
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<any>>
  value: string
  error: boolean | undefined
  helperText: string | false | undefined
}
