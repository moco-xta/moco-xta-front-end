import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import ClosingArrow from '../../buttons/closing_arrow'
import SignIn from './sign_in'
import SignUp from './sign_up'

import './index.scss'

export default function Authentication() {
  const authenticationIsOpen = useSelector(
    (state: RootState) => state.appState.authenticationIsOpen,
  )

  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div
      id='authentication'
      className={`${authenticationIsOpen ? 'open' : ''}`}
    >
      <ClosingArrow />
      <div id='authentication_forms_container'>
        {isSignIn ? (
          <SignIn setIsSignIn={setIsSignIn} />
        ) : (
          <SignUp setIsSignIn={setIsSignIn} />
        )}
      </div>
    </div>
  )
}
