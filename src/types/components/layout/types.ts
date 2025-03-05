import { ReactNode } from 'react'

// PLAYER PAGE

export type TPlayerPage = {
  id: string
  introduction: ReactNode
  canvas: JSX.Element
}

export type TPlayerPageGreeting = {
  introduction: ReactNode
}

export type TPlayerPageIntroduction = {
  translationPath: string
}
