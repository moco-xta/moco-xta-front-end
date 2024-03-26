import React, { useState } from 'react'
import { Formik } from 'formik'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import {
  AuthenticationComponentsInterface,
  SignInPayloadInterface,
} from '@/interfaces/authenticationInterfaces'

import { useSignInMutation } from '@/redux/api/authenticationApi'

import { signInValidationSchema } from 'validations/signInValidationSchema'

import SignInForm from './sign_in_form'

import { clearFormStoredValues } from '@/helpers/localStorageHelpers'

import './index.scss'

export default function SignIn({
  setIsSignIn,
}: AuthenticationComponentsInterface) {
  const t = useTranslations()

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] =
    useState<boolean>(false)

  const initialValues: SignInPayloadInterface = {
    email: '',
    password: '',
  }

  const [signIn] = useSignInMutation()

  return (
    <div id='sign_in_container'>
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signInValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitButtonIsDisabled(true)
          toast.promise(signIn(values), {
            loading: t('TOASTERS.AUTHENTIFICATION.SIGN_IN.LOADING'),
            success: () => {
              resetForm({ values: initialValues })
              clearFormStoredValues(initialValues)
              setSubmitButtonIsDisabled(false)
              return t('TOASTERS.AUTHENTIFICATION.SIGN_IN.SUCCESS')
            },
            error: t('TOASTERS.AUTHENTIFICATION.SIGN_IN.ERROR'),
          })
        }}
      >
        <SignInForm
          submitButtonIsDisabled={submitButtonIsDisabled}
          setIsSignIn={setIsSignIn}
        />
      </Formik>
    </div>
  )
}
