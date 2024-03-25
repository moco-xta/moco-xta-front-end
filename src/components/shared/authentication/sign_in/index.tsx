import React from 'react'

import { useSignInMutation } from '@/redux/api/authenticationApi'

import './index.scss'

export default function SignIn() {

  const [signIn] = useSignInMutation()

  return (
    <div>Sign in</div>
  )
}
