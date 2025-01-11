import * as THREE from 'three'
import gsap from 'gsap'
import { ThreeEvent } from '@react-three/fiber'

import type { TUseHoverModelAnimation } from '@/types/hooks/types'

import { getUvMousePositionOnMesh } from '@/helpers/threeHelpers'

export default function useHoverModelAnimation({
  ref,
  animationData
}: TUseHoverModelAnimation) {
  function handleOnPointerMove(event: ThreeEvent<PointerEvent>) {
    const { x, y } = getUvMousePositionOnMesh(event)
    
    gsap.to(ref.current!.rotation, {
      duration: animationData.duration,
      ease: animationData.ease,
      x: -y * animationData.rotation.factor,
      y: -x * animationData.rotation.factor,
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

  function handleOnPointerLeave() {
    gsap.to(ref.current!.rotation, {
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

  return {
    handleOnPointerMove,
    handleOnPointerLeave,
  }
}
