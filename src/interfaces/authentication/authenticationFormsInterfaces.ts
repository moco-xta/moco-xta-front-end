import { FormsInterface } from '../forms/formsInterfaces'

export interface AuthenticationFormsInterface extends FormsInterface {
  setIsSignIn: (value: boolean) => void
}
