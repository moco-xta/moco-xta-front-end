import React, { RefObject, useEffect, useRef } from 'react'

import { ReviewCardInterface } from '@/interfaces/components/cards/reviewCardInterface'

import RatingStars from '@/components/cards/review_card/rating_stars'

import { getUvMousePositionOnDiv } from '@/helpers/cssHelpers'

import './index.scss'

export default function ReviewCard({
  review,
  name,
  role,
  rating,
}: ReviewCardInterface) {
  const cardRef = useRef<HTMLElement>(null)

  function handleMouseMove(event: MouseEvent): void {
    console.log('event', event)
    const { x, y } = getUvMousePositionOnDiv(event)
    cardRef.current!.style.transform = `perspective(1000px) rotateX(${y * 8}deg) rotateY(${x * 12}deg) scale3d(1.1, 1.1, 1.1)`
    cardRef.current!.style.transition = 'all 100ms ease-in-out'
  }

  function handleMouseLeave(event: MouseEvent): void {
    cardRef.current!.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg)scale3d(1, 1, 1)'
    cardRef.current!.style.transition = 'all 250ms ease-in-out'
  }

  useEffect(() => {
    cardRef.current!.addEventListener('mousemove', handleMouseMove)
    cardRef.current!.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove)
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef as RefObject<HTMLDivElement>}
      id='review_card'
    >
      <p className='quote_up'>"</p>
      <p className='review'>{review}</p>
      <p className='quote_down'>"</p>
      <div className='rating_stars_container'>
        <RatingStars rating={rating} />
      </div>
      <div className='name_role_container'>
        <p className='name'>{name}</p>
        <p className='role'>{role}</p>
      </div>
    </div>
  )
}
