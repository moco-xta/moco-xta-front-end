import { MutableRefObject } from 'react'

export type TWord3D = {
  keyPrefix: string
  font: string
  size?: number
  depth?: number
  spaceWidth?: number
  position?: THREE.Vector3
  center?: boolean
  splittedWord: string[]
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}

export type TLetter3D = {
  keyPrefix: string
  font: string
  size?: number
  depth?: number
  letter: string
  spaceWidth?: number
  index?: number
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}
