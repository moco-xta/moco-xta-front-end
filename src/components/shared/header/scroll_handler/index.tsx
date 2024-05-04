import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import useScroll from '@/hooks/useScroll'

import { ScrollHandlerInterface } from '@/interfaces/componentsInterfaces'

function ScrollHandler({ navWrapperRef }: ScrollHandlerInterface) {
  const pathname = usePathname()

  const { y } = useScroll()

  useEffect(() => {
    // @ts-ignore
    const nav = navWrapperRef.current.querySelector('nav')
    // @ts-ignore
    const lis_nav = navWrapperRef.current.querySelectorAll('.li_nav')
    if (y < 100 /* && pathname === '/' */) {
      nav!.style.marginTop = '20px'
      nav!.style.marginRight = '20px'
      lis_nav.forEach((li_nav) => {
        // @ts-ignore
        li_nav.style.marginRight = '20px'
      })
    } else {
      nav!.style.marginTop = '0px'
      nav!.style.marginRight = '10px'
      lis_nav.forEach((li_nav) => {
        // @ts-ignore
        li_nav.style.marginRight = '0px'
      })
    }
  }, [y, navWrapperRef, pathname])

  return null
}

export default ScrollHandler
