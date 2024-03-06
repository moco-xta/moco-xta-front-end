import React, { RefObject, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, Html, PerspectiveCamera } from '@react-three/drei'

import { IntroductionCardInterface } from '@/interfaces/components/cards/introductionCardInterface'

import { getUvMousePositionOnDiv } from '@/helpers/cssHelpers'

import './index.scss'

export default function IntroductionCard({
  content,
}: IntroductionCardInterface) {
  const cardRef = useRef<HTMLElement>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  const boxRef = useRef<THREE.Mesh>(null)

  function handleMouseMove(e: MouseEvent): void {
    const { x, y } = getUvMousePositionOnDiv(e)
    cardRef.current!.style.transform = `perspective(1000px) rotateX(${y * 12}deg) rotateY(${x * 12}deg) scale3d(1.1, 1.1, 1.1)`
    cameraRef.current!.position.x = (-x * 3) / 3.5
    cameraRef.current!.position.y = (-y * 4) / 3.5
    boxRef.current!.scale.x = 1.2
    boxRef.current!.scale.y = 1.2
    boxRef.current!.scale.z = 1.2
  }

  function handleMouseLeave(e: MouseEvent): void {
    cardRef.current!.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg)scale3d(1, 1, 1)'
    cameraRef.current!.position.x = 0
    cameraRef.current!.position.y = 0
    boxRef.current!.scale.x = 1
    boxRef.current!.scale.y = 1
    boxRef.current!.scale.z = 1
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
      className='introduction_card'
    >
      <div className='introduction_card_canvas_container'>
        <Canvas
          dpr={1}
          shadows
          legacy
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            preserveDrawingBuffer: true,
          }}
        >
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[0, 0, 15]}
          />
          <pointLight
            position={[10, 10, 10]}
            castShadow
          />
          <pointLight
            position={[-10, 10, 10]}
            castShadow
          />
          {/* <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
            castShadow
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
            castShadow
          /> */}
          <Box
            ref={boxRef}
            args={[2, 2, 2]}
            position={[0, 3, -1]}
            castShadow
            receiveShadow
          />
          <Html position={[-2.5, 0, 0]}>
            <p style={{ width: '200px', textAlign: 'justify' }}>
              {content.description}
            </p>
          </Html>
        </Canvas>
      </div>
    </div>
  )
}
