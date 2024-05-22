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
