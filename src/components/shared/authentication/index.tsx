import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useResize from '@/hooks/useResize'

import { AppDispatch, RootState } from '@/redux/store'
import { setAuthenticationIsOpen } from '@/redux/slice/appStateSlice'

import ClosingArrow from '../../buttons/closing_arrow'
import SignIn from './sign_in'
import SignUp from './sign_up'

import './index.scss'

export default function Authentication() {
  const dispatch = useDispatch<AppDispatch>()

  const authenticationIsOpen = useSelector(
    (state: RootState) => state.appState.authenticationIsOpen,
  )

  const { isDesktop } = useResize()

  useEffect(() => {
    dispatch(setAuthenticationIsOpen(false))
  }, [dispatch, isDesktop])

  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div
      id='authentication'
      className={`${authenticationIsOpen ? 'open' : ''}`}
    >
      <ClosingArrow />
      <div id='authentication_forms_container'>
        {isSignIn ? <SignIn setIsSignIn={setIsSignIn} /> : <SignUp setIsSignIn={setIsSignIn} />}
      </div>
    </div>
  )
}
