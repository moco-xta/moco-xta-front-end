import { ReactNode } from 'react'

export interface RevealComponentInterface {
  children: ReactNode
  threshold: number
  duration: string
  x?: number
  y?: number
}
