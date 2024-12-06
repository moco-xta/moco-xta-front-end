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
  storeValue?: boolean | undefined
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  inputStyle?: {
    [key: string]: string
  }
}

export interface FormikTextareaInterface extends FormikInputsInterface {
  value: string
  cols?: number
  rows?: number
  maxLength: number
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  disabled: boolean
  inputStyle?: {
    [key: string]: string
  }
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
  disabled: boolean
  inputStyle?: {
    [key: string]: string
  }
}

export interface FormikRatingStarsInterface extends FormikInputsInterface {
  value: number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

export interface FormikErrorInterface {
  error: boolean | undefined
  helperText: string | false | undefined
}
