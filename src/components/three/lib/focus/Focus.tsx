import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { DepthOfField, EffectComposer, N8AO } from '@react-three/postprocessing'
import { easing } from 'maath'

type TFocus = {
  children: React.ReactNode
}

export default function Focus({ children }: TFocus) {
  // const dofTargetRef = useRef<DepthOfFieldEffect>(null!)
  const dofTargetRef = useRef<{ target: THREE.Vector3 }>(null!)

  const ringRef = useRef<THREE.Mesh>(null!)
  const pointer = useRef<THREE.Vector3>(new THREE.Vector3())

  useLayoutEffect(() => {
    dofTargetRef.current.target = new THREE.Vector3()

    ringRef.current.geometry = new THREE.RingGeometry(0.125, 0.185)
    ringRef.current.geometry.rotateX(Math.PI / 2).rotateZ(Math.PI / 2)
  }, [])

  useFrame((state, delta) => {
    easing.damp3(dofTargetRef.current.target, pointer.current, 0.2, delta)
    ringRef.current.scale.setScalar(2 + Math.sin(state.clock.elapsedTime * 6) / 2)
  })

  function handleOnPointerMove(e: ThreeEvent<PointerEvent>) {
    e.stopPropagation()
    // console.log('e.point', e.point)
    pointer.current = new THREE.Vector3(e.point.x, e.point.y, e.point.z)
    ringRef.current.position.copy(e.point)
    if (e.normal) {
      ringRef.current.rotation.set(...e.normal.multiplyScalar(Math.PI / 2).toArray())
    }
  }

  return (
    <>
      <group onPointerMove={handleOnPointerMove}>
        {children}
        <EffectComposer
          enableNormalPass
          multisampling={4}
        >
          <N8AO
            aoRadius={1}
            intensity={2}
            distanceFalloff={10}
          />
          <DepthOfField
            // @ts-ignore
            ref={dofTargetRef}
            focalLength={0.3}
            bokehScale={18}
          />
        </EffectComposer>
      </group>
      <mesh ref={ringRef}>
        <meshBasicMaterial
          color='pink'
          toneMapped={false}
          polygonOffset
          polygonOffsetFactor={-1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}
