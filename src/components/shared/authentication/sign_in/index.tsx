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
import { setAuthenticationIsOpen } from '@/redux/slice/appStateSlice'

import { signInValidationSchema } from 'validations/signInValidationSchema'

import SignInForm from './sign_in_form'

import { clearFormStoredValues } from '@/helpers/localStorageHelpers'

import './index.scss'

export default function SignIn({ setIsSignIn }: SignUpSignInInterface) {
  const t = useTranslations()

  const dispatch = useDispatch<AppDispatch>()

  const [signIn] = useSignInMutation()

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState<boolean>(false)
  const [resetButtonIsDisabled, setResetButtonIsDisabled] = useState<boolean>(true)

  const initialValues: SignInPayloadInterface = {
    email: '',
    password: '',
  }

  const handleSetAuthenticationIsOpen = () => {
    dispatch(setAuthenticationIsOpen(false))
  }

  return (
    <div id='sign_in_container'>
      <Formik
        initialValues={initialValues}
        validationSchema={signInValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitButtonIsDisabled(true)
          toast.promise(signIn(values).unwrap(), {
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
            error: () => {
              setSubmitButtonIsDisabled(false)
              return t('TOASTERS.AUTHENTIFICATION.SIGN_IN.ERROR')
            },
          })
        }}
      >
        <SignInForm
          submitButtonIsDisabled={submitButtonIsDisabled}
          resetButtonIsDisabled={resetButtonIsDisabled}
          setIsSignIn={setIsSignIn}
        />
      </Formik>
    </div>
  )
}
