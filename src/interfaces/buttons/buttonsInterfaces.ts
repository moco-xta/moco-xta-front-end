import { FormikState } from 'formik'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

import { AddReviewValuesInterface } from '../redux/reduxApiInterfaces'

export interface InternalLinkInterface {
  path: string
  text: string
  style?: {
    [key: string]: string
  }
}

export interface MenuButtonInterface {
  type: 'open' | 'close'
}

export interface SubmitButtonInterface {
  submitButtonIsDisabled: boolean
}

export interface ResetButtonInterface {
  resetForm: (nextState?: Partial<FormikState<AddReviewValuesInterface>> | undefined) => void
}

export interface AddReviewButtonInterface {
  text: string
}

export interface ToggleButtonInterface {
  label: string[]
  checked: boolean
  action: ActionCreatorWithPayload<boolean, 'About/setIsFinalRender'>
}
