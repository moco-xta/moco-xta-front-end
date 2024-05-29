import {
  AddReviewValuesInterface,
  ReviewPayloadInterface,
} from '../reduxApiInterfaces'

export interface SignUpSignInInterface {
  setIsSignIn: (value: boolean) => void
}

export interface TextBlockSimpleInterface {
  id?: string
  title: string
  divStyle?: {
    [key: string]: string
  }
  paragraph: string
  className?: string
}

export interface ReviewCardInterface {
  review: ReviewPayloadInterface | AddReviewValuesInterface
  cardStyle?: {
    [key: string]: string | number
  }
}
