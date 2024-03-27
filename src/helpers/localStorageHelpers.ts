import { AddReviewValuesInterface } from '@/interfaces/addReviewValuesInterface'
import {
  SignInPayloadInterface,
  SignUpValuesInterface,
  TokensInterface,
} from '@/interfaces/authenticationInterfaces'

export function storeTokens(tokens: TokensInterface) {
  Object.entries(tokens).forEach(([key, value]) => {
    localStorage.setItem(key.toUpperCase(), value)
  })
}

export function getAccessToken() {
  return localStorage.getItem('ACCESS_TOKEN')
}

export function removeTokens() {
  localStorage.removeItem('ACCESS_TOKEN')
  localStorage.removeItem('REFRESH_TOKEN')
}

export function clearFormStoredValues(
  initialValues:
    | SignUpValuesInterface
    | SignInPayloadInterface
    | AddReviewValuesInterface,
) {
  Object.entries(initialValues).forEach(([key, _]) => {
    localStorage.removeItem(key)
  })
}
