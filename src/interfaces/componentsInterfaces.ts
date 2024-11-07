import { AddReviewValuesInterface, ReviewPayloadInterface } from './reduxApiInterfaces'

export interface HeaderInterface {
  isMainHeader?: boolean
}

export interface LogoInterface {
  isMainLogo?: boolean
}

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

export interface TextBlockMainInterface {
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

export interface ScrollDownInterface {
  top: string
  color: string
}

export interface RatingStarsInterface {
  rating: number
}
