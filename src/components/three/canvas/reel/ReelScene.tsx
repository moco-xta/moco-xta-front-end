import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export default function ReelScene() {
  const { scene: modelScene, animations } = useGLTF(glbConstants.INTRODUCTION.REEL_PLANE)
  const groupRef = useRef<THREE.Group>(null!)
  const { actions } = useAnimations(animations, groupRef)

  useEffect(() => {
    if (actions) {
      const action1 = actions['Key.001Action'] // Replace with your animation key
      const action2 = actions['RoundedPlaneAction'] // Replace with your animation key

      if (!action1 || !action2) {
        console.error('Missing animation actions:', actions)
        return
      }

      // Play the animations
      action1.play()
      action2.play()

      // Optionally, control the animations with GSAP
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#reel_canvas',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            action1.time = action1.getClip().duration * self.progress
            action2.time = action2.getClip().duration * self.progress
          },
        },
      })

      return () => {
        timeline.kill()
        action1.stop()
        action2.stop()
      }
    }
  }, [actions])

  return (
    <group ref={groupRef}>
      <primitive object={modelScene.children[0]} />
    </group>
  )
}