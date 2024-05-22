import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import { SignUpSignInInterface } from '@/interfaces/new/componentsInterfaces'
import { SignUpValuesInterface } from '@/interfaces/new/reduxApiInterfaces'

import { AppDispatch } from '@/redux/store'
import { useSignUpMutation } from '@/redux/api/authenticationApi'
import { setIsAuthenticated } from '@/redux/slice/authenticationSlice'
import { setAuthenticationIsOpen } from '@/redux/slice/appStateSlice'

import { signUpValidationSchema } from 'validations/signUpValidationSchema'

import SignUpForm from './sign_up_form'

import { clearFormStoredValues } from '@/helpers/localStorageHelpers'

import './index.scss'

export default function SignUp({ setIsSignIn }: SignUpSignInInterface) {
  const t = useTranslations()

  const dispatch = useDispatch<AppDispatch>()

  const [signUp] = useSignUpMutation()

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] =
    useState<boolean>(false)
  const [resetButtonIsDisabled, setResetButtonIsDisabled] =
    useState<boolean>(true)

  const initialValues: SignUpValuesInterface = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const handleSetAuthenticationIsOpen = () => {
    dispatch(setAuthenticationIsOpen(false))
  }

  return (
    <div id='sign_in_container'>
      <h1 className='form_title'>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitButtonIsDisabled(true)
          const payload = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            role: 'User',
          }
          toast.promise(signUp(payload).unwrap(), {
            loading: t('TOASTERS.AUTHENTIFICATION.SIGN_IN.LOADING'),
            success: () => {
              dispatch(setIsAuthenticated(true))
              resetForm({ values: initialValues })
              clearFormStoredValues(initialValues)
              setSubmitButtonIsDisabled(false)
              handleSetAuthenticationIsOpen()
              return t('TOASTERS.AUTHENTIFICATION.SIGN_IN.SUCCESS')
            },
            error: (response) => {
              setSubmitButtonIsDisabled(false)
              return response.data.message
            },
          })
        }}
      >
        <SignUpForm
          submitButtonIsDisabled={submitButtonIsDisabled}
          resetButtonIsDisabled={resetButtonIsDisabled}
          setIsSignIn={setIsSignIn}
        />
      </Formik>
    </div>
  )
}
