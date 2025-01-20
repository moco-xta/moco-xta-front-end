import React, { useEffect, useRef } from 'react'
import { HiOutlineArrowUpCircle } from 'react-icons/hi2'

import type { TSdmScrollToTop } from '@/types/components/layout/buttons/types'

import useScroll from '@/hooks/useScroll'

import './index.scss'

export default function SdmScrollToTop({ elementId }: TSdmScrollToTop) {
  const { scrollY, scrollPercentage } = useScroll(elementId)

  const scrollToTopRef = useRef<HTMLButtonElement>(null!)

  useEffect(() => {
    if (scrollY < 100) {
      if (scrollToTopRef.current) scrollToTopRef.current.classList.remove('visible')
    } else {
      if (scrollToTopRef.current) scrollToTopRef.current.classList.add('visible')
    }
  }, [scrollY, scrollPercentage])

  function handleOnClick() {
    document.getElementById(elementId)!.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      ref={scrollToTopRef}
      className='scroll_to_top'
      onClick={handleOnClick}
    >
      <p>Scroll to top</p>
      <HiOutlineArrowUpCircle />
    </button>
  )
}
