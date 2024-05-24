import React, { useState } from 'react'

import { AuthenticationComponentsInterface } from '@/interfaces/componentsInterfaces'

import SignIn from './sign_in'
import SignUp from './sign_up'

import './index.scss'

export default function Authentication({
  authenticationIsOpen,
  handleSetAuthenticationIsOpen,
}: AuthenticationComponentsInterface) {
  const [isSignIn, setIsSignIn] = useState(false)

  return (
    <div
      id='authentication'
      className={`${authenticationIsOpen ? 'open' : ''}`}
    >
      <div id='authentication_forms_container'>
        {isSignIn ? (
          <SignIn
            setIsSignIn={setIsSignIn}
            handleSetAuthenticationIsOpen={handleSetAuthenticationIsOpen}
          />
        ) : (
          <SignUp
            setIsSignIn={setIsSignIn}
            handleSetAuthenticationIsOpen={handleSetAuthenticationIsOpen}
          />
        )}
      </div>
    </div>
  )
}
