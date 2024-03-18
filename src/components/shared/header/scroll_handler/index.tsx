import { useEffect } from 'react'
import useScroll from '@/hooks/useScroll'

import { ScrollHandlerInterface } from '@/interfaces/scrollHandlerInterface'

function ScrollHandler({ navWrapperRef }: ScrollHandlerInterface) {
  const { y } = useScroll()

  useEffect(() => {
    // @ts-ignore
    const nav = navWrapperRef.current.querySelector('nav')
    // @ts-ignore
    const lis = navWrapperRef.current.querySelectorAll('.li_route')
    if (y < 100) {
      lis.forEach((li_route) => {
        nav!.style.marginTop = '20px'
        nav!.style.marginRight = '20px'
        // @ts-ignore
        li_route.style.marginRight = '20px'
      })
    } else {
      lis.forEach((li_route) => {
        nav!.style.marginTop = '0px'
        nav!.style.marginRight = '0px'
        // @ts-ignore
        li_route.style.marginRight = '0px'
      })
    }
  }, [y])

  return null
}

export default ScrollHandler
