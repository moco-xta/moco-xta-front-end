import { useState } from 'react'
import { useLenis } from 'lenis/react'

export default function useLenisScroll() {
  const [y, setY] = useState<number>(0)
  const [offsetHeight, setOffsetHeight] = useState<number>(0)

  useLenis((lenis) => {
    setY(lenis.targetScroll)
    setOffsetHeight(document.documentElement.offsetHeight - document.documentElement.clientHeight)
  })

  return { y, offsetHeight }
}
