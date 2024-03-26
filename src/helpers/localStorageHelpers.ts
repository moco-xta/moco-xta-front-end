import { AddReviewValuesInterface } from "@/interfaces/addReviewValuesInterface"
import { SignUpValuesInterface } from "@/interfaces/authenticationInterfaces"

export function clearFormStoredValues(initialValues: SignUpValuesInterface | AddReviewValuesInterface) {
  Object.entries(initialValues).forEach(([key, _]) => {localStorage.removeItem(key)})
}