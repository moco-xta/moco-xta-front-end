import React, { useState } from 'react'

import { AuthenticationComponentsInterface } from '@/interfaces/authenticationInterfaces'

import SignIn from './sign_in'
import SignUp from './sign_up'

import './index.scss'

export default function Authentication({ setAuthenticationIsOpen }: AuthenticationComponentsInterface) {
  const [isSignIn, setIsSignIn] = useState(false)

  return (
    <div id='authentication'>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} setAuthenticationIsOpen={setAuthenticationIsOpen} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} setAuthenticationIsOpen={setAuthenticationIsOpen} />
      )}
    </div>
  )
}
