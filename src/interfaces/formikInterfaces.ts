import { ChangeEvent } from 'react'
import { FormikErrors } from 'formik'

interface FormikInputsInterface {
  label?: string
  name: string
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void | FormikErrors<any>>
  error: boolean | undefined
  helperText: string | false | undefined
}

export interface FormikTextInterface extends FormikInputsInterface {
  type?: string
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface FormikTextareaInterface extends FormikInputsInterface {
  value: string
  cols: number
  rows: number
  maxLength: number
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

interface RadioGroupOptions {
  label?: string
  name: string
  value?: string
}

export interface FormikRadioGroupInterface extends FormikInputsInterface {
  value: string
  options: RadioGroupOptions[]
  translationKeyPrefix: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface FormikRatingStarsInterface extends FormikInputsInterface {
  value: number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface FormikErrorInterface {
  error: boolean | undefined
  helperText: string | false | undefined
}
