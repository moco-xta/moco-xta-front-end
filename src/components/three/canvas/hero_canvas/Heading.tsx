import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { SGilroyHeavy } from '../../models/fonts/gilroy/heavy/SGilroyHeavy'
import { AGilroyHeavy } from '../../models/fonts/gilroy/heavy/AGilroyHeavy'
import { LGilroyHeavy } from '../../models/fonts/gilroy/heavy/LGilroyHeavy'
import { UGilroyHeavy } from '../../models/fonts/gilroy/heavy/UGilroyHeavy'
import { TGilroyHeavy } from '../../models/fonts/gilroy/heavy/TGilroyHeavy'

import './index.scss'

export default function Heading() {
  const sGilroyHeavyRef = useRef<THREE.Mesh>(null!)
  const aGilroyHeavyRef = useRef<THREE.Mesh>(null!)
  const lGilroyHeavyRef = useRef<THREE.Mesh>(null!)
  const uGilroyHeavyRef = useRef<THREE.Mesh>(null!)
  const tGilroyHeavyRef = useRef<THREE.Mesh>(null!)

  const timeline = gsap.timeline()

  useGSAP(() => {
    timeline
      .from(
        [
          sGilroyHeavyRef.current.position,
          aGilroyHeavyRef.current.position,
          lGilroyHeavyRef.current.position,
          uGilroyHeavyRef.current.position,
          tGilroyHeavyRef.current.position,
        ],
        {
          y: -0.5,
          stagger: 0.1,
          duration: 0.5,
          ease: 'none',
        },
      )
      .from(
        [
          sGilroyHeavyRef.current.material,
          aGilroyHeavyRef.current.material,
          lGilroyHeavyRef.current.material,
          uGilroyHeavyRef.current.material,
          tGilroyHeavyRef.current.material,
        ],
        {
          opacity: -0.5,
          stagger: 0.1,
          duration: 0.5,
          ease: 'none',
        },
        0,
      )
  })

  return (
    <group
      position={[0, 20, 0]}
      scale={[1, 1.25, 1]}
    >
      <SGilroyHeavy ref={sGilroyHeavyRef} />
      <AGilroyHeavy ref={aGilroyHeavyRef} />
      <LGilroyHeavy ref={lGilroyHeavyRef} />
      <UGilroyHeavy ref={uGilroyHeavyRef} />
      <TGilroyHeavy ref={tGilroyHeavyRef} />
    </group>
  )
}
