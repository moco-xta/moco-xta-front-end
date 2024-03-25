import React, { useState } from 'react'

import SignIn from './sign_in'
import SignUp from './sign_up'

import './index.scss'

export default function Authentication() {

  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div id='authentication'>
      {isSignIn ? (
        <SignIn />
      ) : (
        <SignUp />
      )}
    </div>
  )
}
