import { MutableRefObject } from 'react'

export type TWord3D = {
  keySuffix: string
  position?: THREE.Vector3
  font: string
  size?: number
  depth?: number
  spaceWidth?: number
  center?: boolean
  splittedWord: string[]
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}

export type TLetter3D = {
  keySuffix: string
  font: string
  size?: number
  depth?: number
  spaceWidth?: number
  lengthRef?: MutableRefObject<number[]>
  letter: string
  index?: number
  children: JSX.Element
}
