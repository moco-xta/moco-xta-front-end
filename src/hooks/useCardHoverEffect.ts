import { RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { CardHoverEffectInterface } from '@/interfaces/effectsInterfaces'

import { getUvMousePositionOnDiv } from '@/helpers/cssHelpers'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

export default function useCardHoverEffect(
  ref: RefObject<HTMLDivElement>,
  constantsEffect: CardHoverEffectInterface,
) {
  gsap.registerPlugin(useGSAP)

  function handleMouseMove(event: MouseEvent) {
    const { x, y } = getUvMousePositionOnDiv(event)
    gsap.to(ref.current, {
      duration: effectsConstants.CARD_HOVER_EFFECT.DURATION,
      ease: effectsConstants.CARD_HOVER_EFFECT.EASE,
      transformPerspective:
        effectsConstants.CARD_HOVER_EFFECT.TRANSFORM_PERSPECTIVE,
      scale: constantsEffect.SCALE_FACTOR,
      rotationX: y * constantsEffect.ROTATION_FACTOR.X,
      rotationY: x * constantsEffect.ROTATION_FACTOR.Y,
    })
  }

  function handleMouseLeave(event: MouseEvent): void {
    gsap.to(ref.current, {
      duration: effectsConstants.CARD_HOVER_EFFECT.DURATION,
      ease: effectsConstants.CARD_HOVER_EFFECT.EASE,
      transformPerspective:
        effectsConstants.CARD_HOVER_EFFECT.TRANSFORM_PERSPECTIVE,
      scale: constantsEffect.INITIAL_SCALE,
      rotationX: constantsEffect.INITIAL_ROTATION.X,
      rotationY: constantsEffect.INITIAL_ROTATION.Y,
    })
  }

  useEffect(() => {
    const refCurrent = ref.current!
    refCurrent.addEventListener('mousemove', handleMouseMove)
    refCurrent.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('mousemove', handleMouseMove)
        refCurrent.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  })
}
