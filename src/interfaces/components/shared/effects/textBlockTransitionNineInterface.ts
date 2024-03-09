import { ElementType, HTMLAttributes } from "react"

export interface TextBlockTransitionNineInterface extends HTMLAttributes<HTMLOrSVGElement> {
  tag: ElementType
  id: string
  className: string
  text: string
  index: number
  activeText: number
}