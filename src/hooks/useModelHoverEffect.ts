import { MutableRefObject } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ThreeEvent } from '@react-three/fiber'

import { getUvMousePositionOnMesh } from '@/helpers/r3fHelpers'

export default function useModelHoverEffect(
  ref: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  constants: any,
) {
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {}, {
    scope: ref,
  })

  function handleOnPointerMove(event: ThreeEvent<PointerEvent>) {
    const { x, y } = getUvMousePositionOnMesh(event, 'introduction_card')
    gsap.to(ref.current!.rotation, {
      duration: 0.2,
      ease: 'power3.out',
      x: -y * constants.ROTATION.FACTOR,
      y: -x * constants.ROTATION.FACTOR,
      z: 0,
    })
    gsap.to(ref.current!.scale, {
      duration: 0.2,
      ease: 'power3.out',
      x: constants.SCALE.FACTOR,
      y: constants.SCALE.FACTOR,
      z: constants.SCALE.FACTOR,
    })
  }

  function handleOnPointerLeave(event: ThreeEvent<PointerEvent>) {
    gsap.to(ref.current!.rotation, {
      duration: 0.2,
      ease: 'power3.out',
      x: THREE.MathUtils.degToRad(constants.ROTATION.INITIAL.X),
      y: THREE.MathUtils.degToRad(constants.ROTATION.INITIAL.Y),
      z: THREE.MathUtils.degToRad(constants.ROTATION.INITIAL.Z),
    })
    gsap.to(ref.current!.scale, {
      duration: 0.2,
      ease: 'power3.out',
      x: constants.SCALE.INITIAL,
      y: constants.SCALE.INITIAL,
      z: constants.SCALE.INITIAL,
    })
  }

  return {
    handleOnPointerMove,
    handleOnPointerLeave,
  }
}
