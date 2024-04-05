import React, { Ref, Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { useControls, button } from 'leva'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { RoundedCube } from '../../models/rubiks_cube/RoundedCube'
import { ColorPad } from '../../models/rubiks_cube/ColorPad'

interface RotationGrooupInterface {
  rubiksCubeRef: Ref<THREE.Group>
}

function RotattionGroup({ rubiksCubeRef }: RotationGrooupInterface) {
  const rotationGroupRef = useRef<THREE.Group>(null!)

  useControls('Cube', {
    'Left CW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'x', -1, 1)
    }),
    'Left CCW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'x', -1, -1)
    }),
    'Right CW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'x', 1, -1)
    }),
    'Right CCW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'x', 1, 1)
    }),
    'Back CW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'z', -1, 1)
    }),
    'Back CCW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'z', -1, -1)
    }),
    'Front CW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'z', 1, -1)
    }),
    'Front CCW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'z', 1, 1)
    }),
    'Top CW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'y', 1, -1)
    }),
    'Top CCW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'y', 1, 1)
    }),
    'Bottom CW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'y', -1, 1)
    }),
    'Bottom CCW': button(() => {
      // @ts-ignore
      rotate(rubiksCubeRef.current, rotationGroupRef.current, 'y', -1, -1)
    })
  })

  return <group ref={rotationGroupRef} />
}

function setAxis(cubeCoordinate: THREE.Vector3) {
  if(cubeCoordinate.x === 0) return 'x'
  if(cubeCoordinate.y === 0) return 'y'
  if(cubeCoordinate.z === 0) return 'z'
}

function rotate(rubiksCubeRef: THREE.Group, rotationGroupRef: THREE.Group, axis: string, limit: number, multiplier: number) {

  /* const axis: string = setAxis(e.eventObject.position) */

  /* const limit = e.eventObject.position[axis] */

  console.log(limit)

  rotationGroupRef.children
    .slice()
    .reverse()
    .forEach(function (c: THREE.Object3D) {
      /* const parent = c.parent */
      rubiksCubeRef.attach(c)
      /* c.applyMatrix4(parent!.matrixWorld) */
      /* parent!.remove(c) */
      /* c.matrixWorld.decompose(c.position, c.quaternion, c.scale) */
      /* c.updateMatrixWorld */
    })
  rotationGroupRef.quaternion.set(0, 0, 0, 1)
  /* rotationGroupRef.current.children = [] */

  rubiksCubeRef.children
    .slice()
    .reverse()
    .filter(function (c: THREE.Object3D) {
      // @ts-ignore
      return limit < 0 ? c.position[axis] < limit : c.position[axis] > limit
    })
    .forEach(function (c) {
      rotationGroupRef.attach(c)
    })

  gsap.to(rotationGroupRef.rotation, {
    duration: 1,
    ease: 'power3.out',
    [axis]: THREE.MathUtils.degToRad(90) * multiplier,
  })
}

function RubiksCubeScene() {
  gsap.registerPlugin(useGSAP)

  const rubiksCubeRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    console.log('rubiksCubeRef', rubiksCubeRef)
  }, [rubiksCubeRef])

  function setCoordinate(value: number) {
    return value * 2 - 2
  }

  function handleClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation()
    /* console.log(e.point) */
    console.log(e.eventObject.position)

    /* console.log(
      e.point.x - e.eventObject.position.x,
      e.point.y - e.eventObject.position.y,
      e.point.z - e.eventObject.position.z,
    ) */
  }

  return (
    <>
      <group ref={rubiksCubeRef}>
        {[...Array(3)].map((_, x) =>
          [...Array(3)].map((_, z) =>
            [...Array(3)].map((_, y) => {
              const coordinateX = setCoordinate(x)
              const coordinateZ = setCoordinate(z)
              const coordinateY = setCoordinate(y)
              return (
                <>
                  <group
                    position={[coordinateX, coordinateZ, coordinateY]}
                    onClick={handleClick}
                  >
                    <RoundedCube />
                    {coordinateX === 2 && (
                      <ColorPad
                        rotation={[0, 0, THREE.MathUtils.degToRad(-90)]}
                        color={new THREE.Color('rgb(255, 0, 0)')}
                      />
                    )}
                    {coordinateX === -2 && (
                      <ColorPad
                        rotation={[0, 0, THREE.MathUtils.degToRad(90)]}
                        color={new THREE.Color('rgb(255, 102, 0)')}
                      />
                    )}
                    {coordinateY === 2 && (
                      <ColorPad
                        rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
                        color={new THREE.Color('rgb(255, 255, 255)')}
                      />
                    )}
                    {coordinateY === -2 && (
                      <ColorPad
                        rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
                        color={new THREE.Color('rgb(255, 255, 0)')}
                      />
                    )}
                    {coordinateZ === 2 && (
                      <ColorPad
                        rotation={[0, 0, 0]}
                        color={new THREE.Color('rgb(1, 255, 0)')}
                      />
                    )}
                    {coordinateZ === -2 && (
                      <ColorPad
                        rotation={[THREE.MathUtils.degToRad(-180), 0, 0]}
                        color={new THREE.Color('rgb(0, 0, 255)')}
                      />
                    )}
                  </group>
                </>
              )
            }),
          ),
        )}
      </group>
      <RotattionGroup rubiksCubeRef={rubiksCubeRef}  />
    </>
  )
}

export default function RubiksCubeCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy={false}
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 15]}
        fov={55}
      />
      <OrbitControls />
      <ambientLight position={[5, 5, 5]} />
      <pointLight
        position={[5, 5, 5]}
        intensity={10}
        castShadow
      />
      <pointLight
        position={[-5, 5, -5]}
        intensity={10}
        castShadow
      />
      <axesHelper args={[5]} />
      <Suspense>
        <RubiksCubeScene />
      </Suspense>
    </Canvas>
  )
}
