import { useRef, useState } from 'react'

export default function useSplitted3DText(text: string) {
  const [textUpperCase] = useState<string>(text.toUpperCase())
  const [textSplitted] = useState<string[]>(textUpperCase.split(''))

  const textGroupRef = useRef<THREE.Group>(null!)
  const textLengthRef = useRef<number[]>([])

  return {
    textSplitted,
    textGroupRef,
    textLengthRef,
  }
}
