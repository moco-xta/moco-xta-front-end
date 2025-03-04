import { ElementType, HTMLAttributes } from 'react'

export type TTextAnimation = HTMLAttributes<HTMLOrSVGElement> & {
  tag: ElementType
  id: string
  className?: string
  text: string
  animation?: {
    from: Record<string, string | number>
    to: Record<string, string | number>
  }
}
