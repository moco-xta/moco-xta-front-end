import { ReactNode } from 'react'

// TITLES

export type TTitle = {
  title?: string
  translationPath?: string
  url?: string
}

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
