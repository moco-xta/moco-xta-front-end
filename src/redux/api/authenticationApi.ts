import apiSlice from '../slice/apiSlice'

import { default as apiConstants } from '@/constants/apiConstants.json'

import {
  SignInInterface,
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
      invalidatesTags: ['Authentication'],
    }),
    signIn: build.mutation<TokensInterface, SignInInterface>({
      query: (signInPayload) => ({
        url: apiConstants.SIGN_IN,
        method: 'POST',
        body: signInPayload,
      }),
      invalidatesTags: ['Authentication'],
    }),
  }),
})

export const { useSignUpMutation, useSignInMutation } = authenticationApi
