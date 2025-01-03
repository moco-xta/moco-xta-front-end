import React, { useEffect, useRef } from 'react'
import { HiOutlineArrowUpCircle } from 'react-icons/hi2'

import useScroll from '@/hooks/useScroll'

import './index.scss'

type TScrollToTop = {
  elementId: string
}

export default function ScrollToTop({ elementId }: TScrollToTop) {
  const { y, scrollPercentage } = useScroll('resources_content')

  const scrollToTopRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (y < 100) {
      if (scrollToTopRef.current) scrollToTopRef.current.classList.remove('visible')
    } else {
      if (scrollToTopRef.current) scrollToTopRef.current.classList.add('visible')
    }
  }, [y, scrollPercentage])

  function handleOnClick() {
    document.getElementById(elementId)!.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      ref={scrollToTopRef}
      className='scroll_to_top'
    >
      <p onClick={handleOnClick}>Scroll to top</p>
      <HiOutlineArrowUpCircle />
    </div>
  )
}
