import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import { SignUpSignInInterface } from '@/interfaces/componentsInterfaces'
import { SignUpValuesInterface } from '@/interfaces/reduxApiInterfaces'

import { AppDispatch } from '@/redux/store'
import { useSignUpMutation } from '@/redux/api/authenticationApi'
import { setIsAuthenticated } from '@/redux/slice/authenticationSlice'

import { signUpValidationSchema } from 'validations/signUpValidationSchema'

import SignUpForm from './sign_up_form'

import { clearFormStoredValues } from '@/helpers/localStorageHelpers'

import './index.scss'

export default function SignUp({
  setIsSignIn,
  handleSetAuthenticationIsOpen,
}: SignUpSignInInterface) {
  const t = useTranslations()

  const dispatch = useDispatch<AppDispatch>()

  const [signUp] = useSignUpMutation()

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState<boolean>(false)

  const initialValues: SignUpValuesInterface = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  return (
    <div id='sign_in_container'>
      <h1>Sign up</h1>
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
              resetForm({
                values: initialValues,
              })
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
        {/* TODO: fix it */}
        {/* @ts-ignore */}
        <SignUpForm
          submitButtonIsDisabled={submitButtonIsDisabled}
          setIsSignIn={setIsSignIn}
        />
      </Formik>
    </div>
  )
}
