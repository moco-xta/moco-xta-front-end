import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'
/* import Face5Icon from '@mui/icons-material/Face5' */

import { AppDispatch, RootState } from '@/redux/store'
import { setIsAuthenticated } from '@/redux/slice/authenticationSlice'
import { useLogOutMutation } from '@/redux/api/authenticationApi'

import { getAccessToken, removeTokens } from '@/helpers/localStorageHelpers'

import { AuthenticationButtonInterface } from '@/interfaces/new/buttonsInterfaces'

export default function AuthenticationButton({
  setMenuIsOpen,
  setAuthenticationIsOpen,
}: AuthenticationButtonInterface) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  )

  function handleAuthenticationIsOpen() {
    setAuthenticationIsOpen(true)
    setMenuIsOpen(false)
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
