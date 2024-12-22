import { MutableRefObject } from 'react'

export type TText3D = {
  font: string
  size?: number
  depth?: number
  center?: boolean
  spaceWidth?: number
}

export type TWord3D = TText3D & {
  keySuffix: string
  position?: THREE.Vector3
  splittedWord: string[]
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}

export type TLetter3D = TText3D & {
  keySuffix: string
  lengthRef?: MutableRefObject<number[]>
  letter: string
  index?: number
  children: JSX.Element
}
