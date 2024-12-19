import React, { createRef, forwardRef, MutableRefObject, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { AnimationsInterface } from '@/interfaces/animation'
import { showHideAnimation } from '@/types/animation/timelineTypes'

interface AnimatedComponentInterface {
  timeline: GSAPTimeline
  animations: AnimationsInterface
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: number | THREE.Vector3
  children: React.ReactNode
}

export const AnimatedComponent = forwardRef<THREE.Group, AnimatedComponentInterface>(
  ({ timeline, animations, children, ...rest }, ref = createRef<THREE.Group>()) => {
    useGSAP(
      () => {
        // if (Object(animations).hasOwnProperty('visibility')) {
        /* if ('visibility' in Object(animations)) {
          showHideAnimation(
            timeline,
            animations.visibility!.duration!,
            animations.visibility!.label!,
          )
        } */
      },
      // { scope: ref },
    )

    return (
      <group
        ref={ref}
        {...rest}
      >
        {children}
      </group>
    )
  },
)
