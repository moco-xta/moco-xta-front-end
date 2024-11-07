import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import { AppDispatch, RootState } from '@/redux/store'
import {
  setAuthenticationIsOpen,
  setMenuIsOpen,
  setLocaleSwitcherIsOpen,
} from '@/redux/slice/appStateSlice'
import { useLogOutMutation } from '@/redux/api/authenticationApi'
import { setIsAuthenticated } from '@/redux/slice/authenticationSlice'

import './index.scss'

export default function AuthenticationButton() {
  const t = useTranslations()

  const [logOut] = useLogOutMutation()

  const dispatch = useDispatch<AppDispatch>()
  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated)

  function handleAuthenticationIsOpen() {
    console.log('handleAuthenticationIsOpen')
    dispatch(setAuthenticationIsOpen(true))
    dispatch(setMenuIsOpen(false))
    dispatch(setLocaleSwitcherIsOpen(false))
  }

  function handleLogOut() {
    toast.promise(logOut().unwrap(), {
      loading: t('TOASTERS.AUTHENTICATION.LOG_OUT.LOADING'),
      success: () => {
        dispatch(setIsAuthenticated(false))
        return t('TOASTERS.AUTHENTICATION.LOG_OUT.SUCCESS')
      },
      error: () => {
        return t('TOASTERS.AUTHENTICATION.LOG_OUT.ERROR')
      },
    })
  }

  return (
    <li
      id='authentication_button'
      className='lis'
    >
      {!isAuthenticated ? (
        <span
          id='log_in_button'
          className='span_link_wrapper'
          title={t('AUTHENTICATION.HEADER.LOG_IN')}
          onClick={handleAuthenticationIsOpen}
        >
          {t('AUTHENTICATION.HEADER.LOG_IN')}
        </span>
      ) : (
        <span
          id='log_out_button'
          className='span_link_wrapper'
          title={t('AUTHENTICATION.HEADER.LOG_OUT')}
          onClick={handleLogOut}
        >
          {t('AUTHENTICATION.HEADER.LOG_OUT')}
        </span>
      )}
    </li>
  )
}
