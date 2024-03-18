import { FormikState } from 'formik'

import { AddReviewValuesInterface } from './addReviewValuesInterface'

export interface ResetButtonInterface {
  resetForm: (
    nextState?: Partial<FormikState<AddReviewValuesInterface>> | undefined,
  ) => void
}
