import React, { RefObject, useEffect, useRef } from 'react'

import { IntroductionCardInterface } from '@/interfaces/components/cards/introductionCardInterface'

import { getUvMousePositionOnDiv } from '@/utils/cssUtils'

import './index.scss'

export default function IntroductionCard({}: IntroductionCardInterface) {
  const cardRef = useRef<HTMLElement>(null)

  function handleMouseMove(e: MouseEvent): void {
    const { x, y } = getUvMousePositionOnDiv(e)
    cardRef.current!.style.transform = `perspective(1000px) rotateX(${y * 12}deg) rotateY(${x * 12}deg) scale3d(1.1, 1.1, 1.1)`
  }

  function handleMouseLeave(e: MouseEvent): void {
    cardRef.current!.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg)scale3d(1, 1, 1)'
  }

  useEffect(() => {
    cardRef.current!.addEventListener('mousemove', handleMouseMove)
    cardRef.current!.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      cardRef.current!.removeEventListener('mousemove', handleMouseMove)
      cardRef.current!.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef as RefObject<HTMLDivElement>}
      className='introduction_card'
    >
      Test
    </div>
  )
}
