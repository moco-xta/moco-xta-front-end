import apiSlice from '../slice/apiSlice'

import { default as apiConstants } from '@/constants/apiConstants.json'
import { storeTokens } from '@/helpers/localStorageHelpers'

import {
  SignInPayloadInterface,
  SignUpPayloadInterface,
  TokensInterface,
} from '@/interfaces/authenticationInterfaces'

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
  }),
})

export const { useSignUpMutation, useSignInMutation } = authenticationApi