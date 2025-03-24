import React /* , { useCallback, useEffect, useRef } */ from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

// import { useScrollAnimation } from '@/hooks/projects/three/useScroll'

import ProjectsScene from './ProjectsScene'

import { canvasDefaultValues } from '@/data/projects/three/canvasData'

import './index.scss'

export default function ProjectsCanvas() {
  // const { speedRef, positionRef, roundedRef } = useScrollAnimation()

  // const blockRef = useRef<HTMLDivElement>(null!)
  // const wrapRef = useRef<HTMLDivElement>(null!)
  // const nRefs = useRef<Array<HTMLDivElement | null>>([])

  // const objs = Array(5).fill({ dist: 0 })

  /* const raf = useCallback(() => {
    positionRef.current += speedRef.current
    speedRef.current *= 0.8

    objs.forEach((obj, index) => {
      obj.dist = Math.min(Math.abs(positionRef.current - index), 1)
      obj.dist = 1 - obj.dist ** 2
      nRefs.current[index]!.style.transform = `scale(${1 + 0.4 * obj.dist} )`
    })

    roundedRef.current = Math.round(positionRef.current)
    const diff = roundedRef.current - positionRef.current
    positionRef.current += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015
    // if (blockRef.current) {
      // blockRef.current.style.transform = `translateY(${positionRef.current * 100}px)`
    // }
    if (wrapRef.current) {
      wrapRef.current.style.transform = `translateY(${-positionRef.current * 100}px)`
    }
    requestAnimationFrame(raf)
  }, [positionRef, roundedRef, speedRef, objs])

  useEffect(() => {
    raf()
  }, [raf]) */

  return (
    <>
      {/* <div
        ref={blockRef}
        id='block'
      />
      <div
        ref={wrapRef}
        id='wrap'
      >
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div
              ref={(el) => {
                nRefs.current[index] = el
              }}
              key={`n${index}`}
              id={`n${index}`}
              className='n'
              style={{
                top: `${index * 100 + 50}px`,
              }}
            />
          ))}
      </div> */}
      <Canvas {...canvasDefaultValues}>
        <PerspectiveCamera
          makeDefault
          position={new THREE.Vector3(0, 0, 10)}
        />
        <OrbitControls enableZoom={false} />
        <ProjectsScene />
      </Canvas>
    </>
  )
}
