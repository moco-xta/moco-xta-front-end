import { FormikState } from 'formik'

import { AddReviewValuesInterface } from './reduxApiInterfaces'

export interface AuthenticationButtonInterface {
  setAuthenticationIsOpen: (value: boolean) => void
  setMenuIsOpen: (value: boolean) => void
}

export interface InternalLinkInterface {
  routeKey: string
  translationKey: string
}

export interface ExternalLinkinterface {
  url: string
  text: string
}

export interface HamburgerMenuInterface {
  menuIsOpen: boolean
  handleSetMenuIsOpen: () => void
}

export interface SubmitButtonInterface {
  submitButtonIsDisabled: boolean
}

export interface ResetButtonInterface {
  resetForm: (
    nextState?: Partial<FormikState<AddReviewValuesInterface>> | undefined,
  ) => void
  resetButtonIsDisabled: boolean
}
