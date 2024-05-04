import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import { AuthenticationButtonInterface } from '@/interfaces/buttonsInterfaces'

import { RootState } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { setIsAuthenticated } from '@/redux/slice/authenticationSlice'
import { useLogOutMutation } from '@/redux/api/authenticationApi'

import { getAccessToken, removeTokens } from '@/helpers/localStorageHelpers'

import './index.scss'

export default function AuthenticationButton({
  setAuthenticationIsOpen,
  setMenuIsOpen,
}: AuthenticationButtonInterface) {
  const t = useTranslations('ROUTES')

  const dispatch = useDispatch<AppDispatch>()

  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  )

  const [logOut] = useLogOutMutation()

  function handleAuthenticationIsOpen() {
    setAuthenticationIsOpen(true)
    setMenuIsOpen(false)
  }

  function handleLogOut() {
    if (getAccessToken()) {
      toast.promise(
        logOut({
          access_token: getAccessToken()!,
        }).unwrap(),
        {
          loading: t('TOASTERS.AUTHENTIFICATION.LOG_OUT.LOADING'),
          success: () => {
            dispatch(setIsAuthenticated(false))
            return t('TOASTERS.AUTHENTIFICATION.LOG_OUT.SUCCESS')
          },
          error: t('TOASTERS.AUTHENTIFICATION.LOG_OUT.ERROR'),
        },
      )
    }
    removeTokens()
  }

  return (
    <li>
      {!isAuthenticated ? (
        <button
          className='authentication_button small_border_radius'
          onClick={handleAuthenticationIsOpen}
        >
          Login
        </button>
      ) : (
        <button
          className='authentication_button small_border_radius'
          onClick={handleLogOut}
        >
          Log out
        </button>
      )}
    </li>
  )
}
