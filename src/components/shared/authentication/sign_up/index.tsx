import React, { useState } from 'react'
import { Formik } from 'formik'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import {
  AuthenticationComponentsInterface,
  SignUpValuesInterface,
} from '@/interfaces/authenticationInterfaces'

import { useSignUpMutation } from '@/redux/api/authenticationApi'

import { signInValidationSchema } from 'validations/signInValidationSchema'

import SignUpForm from './sign_up_form'

import './index.scss'

export default function SignUp({
  setIsSignIn,
}: AuthenticationComponentsInterface) {
  const t = useTranslations()

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] =
    useState<boolean>(false)

  const initialValues: SignUpValuesInterface = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const [signUp] = useSignUpMutation()

  return (
    <div id='sign_in_container'>
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signInValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitButtonIsDisabled(true)
          const payload = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            role: 'User',
          }
          toast.promise(signUp(payload), {
            loading: t('TOASTERS.AUTHENTIFICATION.SIGN_IN.LOADING'),
            success: () => {
              resetForm({ values: initialValues })
              localStorage.clear()
              setSubmitButtonIsDisabled(false)
              return t('TOASTERS.AUTHENTIFICATION.SIGN_IN.SUCCESS')
            },
            error: t('TOASTERS.AUTHENTIFICATION.SIGN_IN.ERROR'),
          })
        }}
      >
        <SignUpForm
          submitButtonIsDisabled={submitButtonIsDisabled}
          setIsSignIn={setIsSignIn}
        />
      </Formik>
    </div>
  )
}
