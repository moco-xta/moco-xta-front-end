import React, { SyntheticEvent } from 'react'
import { useFormikContext } from 'formik'
import { useTranslations } from 'next-intl'

import { AuthenticationFormsInterface } from '@/interfaces/new/formsInterfaces'
import { SignInPayloadInterface } from '@/interfaces/new/reduxApiInterfaces'

import { FormikTextField } from '@/components/new/inputs'
import { ResetButton, SubmitButton } from '@/components/new/buttons'

import './index.scss'

export default function SignInForm({
  submitButtonIsDisabled,
  resetButtonIsDisabled,
  setIsSignIn,
}: AuthenticationFormsInterface) {
  const t = useTranslations()

  const {
    errors,
    handleChange,
    values,
    resetForm,
    setFieldValue,
    submitForm,
    touched,
  } = useFormikContext<SignInPayloadInterface>()

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    submitForm()
  }

  function handleResetForm() {
    resetForm()
    localStorage.clear()
  }

  function handleSwitchSignUp() {
    setIsSignIn(false)
  }

  return (
    <div id='sign_in_form_container'>
      <form onSubmit={handleSubmit}>
        <FormikTextField
          label={t('AUTHENTICATION.SIGN_IN.EMAIL')}
          type={'text'}
          name={'email'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <FormikTextField
          label={t('AUTHENTICATION.SIGN_IN.PASSWORD')}
          type={'password'}
          name={'password'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.password}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <div className='submit_reset_buttons_container'>
          <SubmitButton submitButtonIsDisabled={submitButtonIsDisabled} />
          <ResetButton resetForm={handleResetForm} />
        </div>
        <div className='sign_in_sign_up_switch_button_container'>
          <button onClick={handleSwitchSignUp}>
            {t('AUTHENTICATION.SIGN_IN.SIGN_UP')}
          </button>
        </div>
      </form>
    </div>
  )
}