import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'
import gsap from 'gsap'

import type { TUseHoverModelAnimation } from '@/types/hooks/types'
import { getUvMousePositionOnMesh } from '@/helpers/threeHelpers'

export default function useHoverModelAnimation({
  ref,
  animationData,
  offset,
}: TUseHoverModelAnimation) {
  function handleOnPointerMove(event: ThreeEvent<PointerEvent>) {
    document.body.style.cursor = 'pointer' // Change cursor to pointer
    const { x, y } = getUvMousePositionOnMesh(event)

    if (ref && ref.current) {
      gsap.to(ref.current.rotation, {
        duration: animationData.duration,
        ease: animationData.ease,
        x: -(y - (offset?.y ?? 0) * 100) * animationData.rotation.factor,
        y: -(x - (offset?.x ?? 0) * 100) * animationData.rotation.factor,
        z: animationData.rotation.factor,
      })
      gsap.to(ref.current!.scale, {
        duration: animationData.duration,
        ease: animationData.ease,
        x: animationData.scale.factor,
        y: animationData.scale.factor,
        z: animationData.scale.factor,
      })
    }
  }

  function handleOnPointerLeave() {
    document.body.style.cursor = 'auto'
    if (ref && ref.current) {
      gsap.to(ref.current.rotation, {
        duration: animationData.duration,
        ease: animationData.ease,
        x: THREE.MathUtils.degToRad(animationData.rotation.initial.x),
        y: THREE.MathUtils.degToRad(animationData.rotation.initial.y),
        z: THREE.MathUtils.degToRad(animationData.rotation.initial.z),
      })
      gsap.to(ref.current!.scale, {
        duration: animationData.duration,
        ease: animationData.ease,
        x: animationData.scale.initial,
        y: animationData.scale.initial,
        z: animationData.scale.initial,
      })
    }
  }

  return {
    handleOnPointerMove,
    handleOnPointerLeave,
  }
}
