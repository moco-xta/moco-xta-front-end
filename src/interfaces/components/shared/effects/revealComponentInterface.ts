import { ReactNode } from 'react'

export interface RevealComponentInterface {
  children: ReactNode
  threshold: number
  duration: string
  delay?: string
  x?: number
  y?: number
}
