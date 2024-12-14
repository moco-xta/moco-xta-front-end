import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Buho } from '@/components/three/models/home/hero/also_know_as/Buho'

import { default as buhosConstants } from '@/constants/animations/home/hero/canvas/groups/also_konw_as/buhosConstants.json'

import { buhosAnimations } from 'animations'

export default function Buhos() {
  const { timeline } = useGSAPTimelineContext()

  const buhosGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    buhosGroupRef.current.children.forEach((buho) => {
      buho.visible = buhosConstants.DEFAULT.VISIBLE
    })
  }, [buhosGroupRef])

  useGSAP(
    () => {
      const buhos: THREE.Mesh[] = gsap.utils.toArray(buhosGroupRef.current.children)
      buhos.forEach((buho) => {
        const animation = buhosAnimations(buho)
        timeline
          .to(
            buho.material,
            {
              keyframes: animation.material.keyframes,
              duration: animation.duration,
            },
            animation.delay,
          )
          .to(
            buho,
            {
              keyframes: animation.visibility.keyframes,
              duration: animation.duration,
            },
            animation.delay,
          )
      })
    },
    { scope: buhosGroupRef },
  )

  return (
    <group ref={buhosGroupRef}>
      {buhosConstants.DEFAULT.GEOMETRY.POSITIONS.map((buho, index) => (
        <Buho
          key={`buho_${index}`}
          position={new THREE.Vector3(buho.X, buho.Y, buho.Z)}
          scale={[
            buhosConstants.DEFAULT.GEOMETRY.SCALES[index].X,
            buhosConstants.DEFAULT.GEOMETRY.SCALES[index].Y,
            buhosConstants.DEFAULT.GEOMETRY.SCALES[index].Z,
          ]}
        />
      ))}
    </group>
  )
}
