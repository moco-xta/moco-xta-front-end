import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'
/* import Face5Icon from '@mui/icons-material/Face5' */

import { AppDispatch, RootState } from '@/redux/store'
import {
  setAuthenticationIsOpen,
  setMenuIsOpen,
  setLocaleSwitcherIsOpen
} from '@/redux/slice/appStateSlice'
import { setIsAuthenticated } from '@/redux/slice/authenticationSlice'
import { useLogOutMutation } from '@/redux/api/authenticationApi'

import { getAccessToken, removeTokens } from '@/helpers/localStorageHelpers'

export default function AuthenticationButton() {
  const dispatch = useDispatch<AppDispatch>()

  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  )

  function handleAuthenticationIsOpen() {
    dispatch(setAuthenticationIsOpen(true))
    dispatch(setMenuIsOpen(false))
    dispatch(setLocaleSwitcherIsOpen(false))
  }

  return (
    <li
      id='authentication_button'
      className='lis'
    >
      {/* <Face5Icon id='authentication_icon' style={{  height: '14px' }} /> */}
      {!isAuthenticated ? (
        <span
          className='span_link_wrapper'
          title={'Login'}
          onClick={handleAuthenticationIsOpen}
        >
          Log in
        </span>
      ) : (
        <span
          className='span_link_wrapper'
          title={'Logout'}
        >
          Log out
        </span>
      )}
    </li>
  )
}
