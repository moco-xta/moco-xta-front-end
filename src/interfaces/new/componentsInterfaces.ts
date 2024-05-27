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
  paragraph: string
  blockStyle?: {
    [key: string]: string | number
  }
  titleStyle?: {
    [key: string]: string | number
  }
  paragraphStyle?: {
    [key: string]: string | number
  }
}

export interface ReviewCardInterface {
  review: ReviewPayloadInterface | AddReviewValuesInterface
  cardStyle?: {
    [key: string]: string | number
  }
}
