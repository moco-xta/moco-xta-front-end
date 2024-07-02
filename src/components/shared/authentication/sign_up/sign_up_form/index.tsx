import React, { SyntheticEvent } from 'react'
import { useFormikContext } from 'formik'
import { useTranslations } from 'next-intl'

import { AuthenticationFormsInterface } from '@/interfaces/new/formsInterfaces'
import { SignUpValuesInterface } from '@/interfaces/new/reduxApiInterfaces'

import { FormikTextField } from '@/components/inputs'
import { ResetButton, SubmitButton } from '@/components/buttons'

import './index.scss'

export default function SignUpForm({
  submitButtonIsDisabled,
  resetButtonIsDisabled,
  setIsSignIn,
}: AuthenticationFormsInterface) {
  const t = useTranslations()

  const { errors, handleChange, values, resetForm, setFieldValue, submitForm, touched } =
    useFormikContext<SignUpValuesInterface>()

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    submitForm()
  }

  function handleResetForm() {
    resetForm()
    localStorage.clear()
  }

  function handleSwitchSignUp() {
    setIsSignIn(true)
  }

  return (
    <div id='sign_in_form_container'>
      <h2 className='form_title'>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <FormikTextField
          label={t('AUTHENTICATION.SIGN_UP.FIRST_NAME')}
          type={'text'}
          name={'firstName'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.firstName}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
        <FormikTextField
          label={t('AUTHENTICATION.SIGN_UP.LAST_NAME')}
          type={'text'}
          name={'lastName'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.lastName}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
        <FormikTextField
          label={t('AUTHENTICATION.SIGN_UP.EMAIL')}
          type={'text'}
          name={'email'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <FormikTextField
          label={t('AUTHENTICATION.SIGN_UP.PASSWORD')}
          type={'password'}
          name={'password'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.password}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <FormikTextField
          label={t('AUTHENTICATION.SIGN_UP.CONFIRM_PASSWORD')}
          type={'password'}
          name={'confirmPassword'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.confirmPassword}
          storeValue={false}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          helperText={touched.confirmPassword && errors.confirmPassword}
        />
        <div className='submit_reset_buttons_container'>
          <SubmitButton submitButtonIsDisabled={submitButtonIsDisabled} />
          <ResetButton resetForm={handleResetForm} />
        </div>
        <div className='sign_in_sign_up_switch_button_container'>
          <button onClick={handleSwitchSignUp}>{t('AUTHENTICATION.SIGN_UP.SIGN_IN')}</button>
        </div>
      </form>
    </div>
  )
}
