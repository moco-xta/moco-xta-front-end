import { useRef, useState } from 'react'

import { TGroup } from '@/types/animation/three/componentTypes'

export default function useSplitted3DText(text: string) {
  const [textUpperCase] = useState<string>(text.toUpperCase())
  const [textSplitted] = useState<string[]>(textUpperCase.split(''))

  const textGroupRef = useRef<TGroup>(null!)
  const textLengthRef = useRef<number[]>([])

  return {
    textSplitted,
    textGroupRef,
    textLengthRef,
  }
}
