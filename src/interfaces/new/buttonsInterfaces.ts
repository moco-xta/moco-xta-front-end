import { FormikState } from 'formik'

import { AddReviewValuesInterface } from './reduxApiInterfaces'

export interface SubmitButtonInterface {
  submitButtonIsDisabled: boolean
}

export interface ResetButtonInterface {
  resetForm: (
    nextState?: Partial<FormikState<AddReviewValuesInterface>> | undefined,
  ) => void
}

export interface AddReviewButtonInterface {
  text: string
}

export interface IsClayRenderToggleButtonInterface {
  handleSetIsClayRender: () => void
}

export interface ToggleButtonInterface {
  label: string[]
  handleOnClick: () => void
}
