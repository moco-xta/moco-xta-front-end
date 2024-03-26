import { AddReviewValuesInterface } from "@/interfaces/addReviewValuesInterface"
import { SignInPayloadInterface, SignUpValuesInterface } from "@/interfaces/authenticationInterfaces"

export function clearFormStoredValues(initialValues: SignUpValuesInterface | SignInPayloadInterface | AddReviewValuesInterface) {
  Object.entries(initialValues).forEach(([key, _]) => {localStorage.removeItem(key)})
}