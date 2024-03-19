import { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { getUvMousePositionOnDiv } from '@/helpers/cssHelpers'

export default function useCardHoverEffect(ref: RefObject<HTMLDivElement>) {
  gsap.registerPlugin(useGSAP)

  function handleMouseMove(event: MouseEvent): void {
    const { x, y } = getUvMousePositionOnDiv(event)
    gsap.to(ref.current, {
      duration: 0.2,
      ease: 'power3.out',
      scale: 1.2,
      rotationX: y * 4,
      rotationY: x * 2,
      transformPerspective: 1000
    })
  }

  function handleMouseLeave(event: MouseEvent): void {
    gsap.to(ref.current, {
      duration: 0.2,
      ease: 'power3.out',
      scale: 1,
      rotationX: 0,
      rotationY: 0,
      transformPerspective: 1000
    })
  }

  useEffect(() => {
    ref.current!.addEventListener('mousemove', handleMouseMove)
    ref.current!.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', handleMouseMove)
        ref.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])
}
