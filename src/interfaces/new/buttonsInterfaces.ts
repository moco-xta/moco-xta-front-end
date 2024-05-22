import { FormikState } from 'formik'

import { AddReviewValuesInterface } from './reduxApiInterfaces'

export interface HamburgerInterface {
  menuIsOpen: boolean
  handleSetMenuIsOpen: () => void
}

export interface AuthenticationButtonInterface {
  setMenuIsOpen: (value: boolean) => void
  setAuthenticationIsOpen: (value: boolean) => void
}

export interface LocaleSwitcherInterface {
  localeSwitcherIsOpen: boolean
  handleSetLocaleSwitcherIsOpen: () => void
}

export interface SubmitButtonInterface {
  submitButtonIsDisabled: boolean
}

export interface ResetButtonInterface {
  resetForm: (
    nextState?: Partial<FormikState<AddReviewValuesInterface>> | undefined,
  ) => void
}
