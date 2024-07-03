import { toast } from 'sonner'

import apiSlice from '../slice/apiSlice'

import {
  SignInPayloadInterface,
  SignUpPayloadInterface,
  TokensInterface,
  LogOutPayloadInterface,
  LogOutResponseInterface,
} from '@/interfaces/reduxApiInterfaces'

import { default as apiConstants } from '@/constants/apiConstants.json'

import { getAccessToken, removeTokens, storeTokens } from '@/helpers/localStorageHelpers'

const authenticationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<TokensInterface, SignUpPayloadInterface>({
      query: (signUpPayload) => ({
        url: apiConstants.SIGN_UP,
        method: 'POST',
        body: signUpPayload,
      }),
      transformResponse: (response: TokensInterface) => {
        storeTokens(response)
        return response
      },
      transformErrorResponse: (response) => {
        return response
      },
      invalidatesTags: ['Authentication'],
    }),
    signIn: build.mutation<TokensInterface, SignInPayloadInterface>({
      query: (signInPayload) => ({
        url: apiConstants.SIGN_IN,
        method: 'POST',
        body: signInPayload,
      }),
      transformResponse: (response: TokensInterface) => {
        storeTokens(response)
        return response
      },
      invalidatesTags: ['Authentication'],
    }),
    logOut: build.mutation<LogOutResponseInterface, void>({
      query: () => ({
        url: apiConstants.LOG_OUT,
        method: 'POST',
        body: {
          accessToken: getAccessToken(),
        },
      }),
      transformResponse: (response: LogOutResponseInterface) => {
        removeTokens()
        return response
      },
      transformErrorResponse: (response) => {
        return response
      },
      invalidatesTags: ['Authentication'],
    }),
  }),
})

export const { useSignUpMutation, useSignInMutation, useLogOutMutation } = authenticationApi
