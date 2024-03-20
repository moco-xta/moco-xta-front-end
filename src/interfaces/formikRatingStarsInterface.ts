import { ChangeEvent } from 'react'
import { FormikErrors } from 'formik'

export interface FormikRatingStarsInterface {
  label: string
  name: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<any>>
  value: number
  error: boolean | undefined
  helperText: string | false | undefined
}
