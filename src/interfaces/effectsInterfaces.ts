import { ElementType, HTMLAttributes, ReactNode } from 'react'

export interface TextBlockTransitionNineInterface
  extends HTMLAttributes<HTMLOrSVGElement> {
  tag: ElementType
  id: string
  className: string
  text: string
  blockIndex: number
  activeBlock: number
}

export interface RevealComponentInterface {
  children: ReactNode
  threshold: number
  duration: string
  delay?: string
  x?: number
  y?: number
  style?: {
    [key: string]: string | number
  }
}

export interface RevealTextLetterByLetterInterface {
  text: string
}

export interface CardHoverEffectInterface {
  INITIAL_ROTATION: {
    X: number
    Y: number
  }
  INITIAL_SCALE: number
  ROTATION_FACTOR: {
    X: number
    Y: number
  }
  SCALE_FACTOR: number
}
