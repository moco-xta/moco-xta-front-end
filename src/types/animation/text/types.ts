import { ElementType, HTMLAttributes } from 'react'

export type TTextAnimation = HTMLAttributes<HTMLOrSVGElement> & {
  tag: ElementType
  id: string
  className?: string
  text: string
}
