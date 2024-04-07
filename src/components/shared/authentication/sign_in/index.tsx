import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import { SignUpSignInInterface } from '@/interfaces/componentsInterfaces'
import { SignInPayloadInterface } from '@/interfaces/reduxApiInterfaces'

import { AppDispatch } from '@/redux/store'
import { useSignInMutation } from '@/redux/api/authenticationApi'
import { setIsAuthenticated } from '@/redux/slice/authenticationSlice'

import { signInValidationSchema } from 'validations/signInValidationSchema'

import SignInForm from './sign_in_form'

import { clearFormStoredValues } from '@/helpers/localStorageHelpers'

import './index.scss'

export default function SignIn({
  setIsSignIn,
  setAuthenticationIsOpen,
}: SignUpSignInInterface) {
  const t = useTranslations()

  const dispatch = useDispatch<AppDispatch>()

  const [signIn] = useSignInMutation()

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] =
    useState<boolean>(false)

  const initialValues: SignInPayloadInterface = {
    email: '',
    password: '',
  }

  function handleCloseAuthentication() {
    setAuthenticationIsOpen(false)
  }

  return (
    <div id='sign_in_container'>
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signInValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitButtonIsDisabled(true)
          toast.promise(signIn(values).unwrap(), {
            loading: t('TOASTERS.AUTHENTIFICATION.SIGN_IN.LOADING'),
            success: () => {
              dispatch(setIsAuthenticated(true))
              resetForm({ values: initialValues })
              clearFormStoredValues(initialValues)
              setSubmitButtonIsDisabled(false)
              handleCloseAuthentication()
              return t('TOASTERS.AUTHENTIFICATION.SIGN_IN.SUCCESS')
            },
            error: (response) => {
              setSubmitButtonIsDisabled(false)
              return 'Authentication failed'
            },
          })
        }}
      >
        <SignInForm
          submitButtonIsDisabled={submitButtonIsDisabled}
          setIsSignIn={setIsSignIn}
        />
      </Formik>
      <button onClick={handleCloseAuthentication}>Close</button>
    </div>
  )
}
