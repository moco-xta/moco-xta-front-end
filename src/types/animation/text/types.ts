import { ElementType, HTMLAttributes } from 'react'

export type TTextBlockTransitionNine = HTMLAttributes<HTMLOrSVGElement> & {
  tag: ElementType
  id: string
  className?: string
  text: string
}
