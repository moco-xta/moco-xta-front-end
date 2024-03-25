import apiSlice from '../slice/apiSlice'

import { default as apiConstants } from '@/constants/apiConstants.json'

import { SignInInterface, TokensInterface } from '@/interfaces/authenticationInterfaces'

const authenticationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
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

export const { useSignInMutation } = authenticationApi