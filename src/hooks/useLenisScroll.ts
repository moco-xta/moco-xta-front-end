import { useLenis } from 'lenis/react'
import { useState } from 'react'

export default function useLenisScroll() {
  const [y, setY] = useState<number>(0)
  const [offsetHeight, setOffsetHeight] = useState<number>(0)

  useLenis((lenis) => {
    setY(lenis.targetScroll)
    console.log(
      'document.getElementById("projects_content")?.offsetHeight!',
      document.getElementById('projects_content')?.offsetHeight!,
    )
    console.log('document.documentElement.clientHeight', document.documentElement.clientHeight)
    setOffsetHeight(
      document.getElementById('projects_content')?.offsetHeight! -
        document.documentElement.clientHeight,
    )
  })

  return { y, offsetHeight }
}
