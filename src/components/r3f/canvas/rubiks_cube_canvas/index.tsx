import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import gsap from 'gsap'

import { RotationGrooupInterface } from '@/interfaces/r3fInterfaces'

import { RoundedCube } from '../../models/rubiks_cube/RoundedCube'
import { ColorPad } from '../../models/rubiks_cube/ColorPad'
import { Button } from '../../models/rubiks_cube/Button'

function RotattionGroup({ rubiksCubeRef }: RotationGrooupInterface) {
  const rotationGroupRef = useRef<THREE.Group>(null!)

  const [isRotating, setIsRotating] = useState<boolean>(false)

  const handleLeftCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'x',
        -1,
        1,
        setIsRotating,
      )
    }
  }

  const handleLeftCCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'x',
        -1,
        -1,
        setIsRotating,
      )
    }
  }

  const handleRightCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'x',
        1,
        -1,
        setIsRotating,
      )
    }
  }

  const handleRightCCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'x',
        1,
        1,
        setIsRotating,
      )
    }
  }

  const handleBackCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'z',
        -1,
        1,
        setIsRotating,
      )
    }
  }

  const handleBackCCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'z',
        -1,
        -1,
        setIsRotating,
      )
    }
  }

  const handleFrontCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'z',
        1,
        -1,
        setIsRotating,
      )
    }
  }

  const handleFrontCCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'z',
        1,
        1,
        setIsRotating,
      )
    }
  }

  const handleTopCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'y',
        1,
        -1,
        setIsRotating,
      )
    }
  }

  const handleTopCCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'y',
        1,
        1,
        setIsRotating,
      )
    }
  }

  const handleBottomCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'y',
        -1,
        1,
        setIsRotating,
      )
    }
  }

  const handleBottomCCW = (e: ThreeEvent<MouseEvent>) => {
    if (!isRotating) {
      e.stopPropagation()
      setIsRotating(true)
      rotate(
        // @ts-ignore
        rubiksCubeRef.current,
        rotationGroupRef.current,
        'y',
        -1,
        -1,
        setIsRotating,
      )
    }
  }

  return (
    <>
      <Button
        position={[2, 2, 2]}
        onClick={handleRightCCW}
      />
      <Button
        position={[2, 2, 2]}
        rotation={[0, THREE.MathUtils.degToRad(180), 0]}
        onClick={handleFrontCW}
      />
      <Button
        position={[2, 2, -2]}
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        onClick={handleBackCCW}
      />
      <Button
        position={[2, 2, -2]}
        rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
        onClick={handleRightCW}
      />
      <Button
        position={[-2, 2, -2]}
        onClick={handleBackCW}
      />
      <Button
        position={[-2, 2, -2]}
        rotation={[0, THREE.MathUtils.degToRad(180), 0]}
        onClick={handleLeftCCW}
      />
      <Button
        position={[-2, 2, 2]}
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        onClick={handleLeftCW}
      />
      <Button
        position={[-2, 2, 2]}
        rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
        onClick={handleFrontCCW}
      />
      <Button
        position={[2, -2, 2]}
        rotation={[
          0,
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(180),
        ]}
        onClick={handleFrontCCW}
      />
      <Button
        position={[2, -2, 2]}
        rotation={[
          0,
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(180),
        ]}
        onClick={handleRightCW}
      />
      <Button
        position={[2, -2, -2]}
        rotation={[0, 0, THREE.MathUtils.degToRad(180)]}
        onClick={handleBackCW}
      />
      <Button
        position={[2, -2, -2]}
        rotation={[
          0,
          THREE.MathUtils.degToRad(180),
          THREE.MathUtils.degToRad(180),
        ]}
        onClick={handleRightCCW}
      />
      <Button
        position={[-2, -2, -2]}
        rotation={[
          0,
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(180),
        ]}
        onClick={handleLeftCW}
      />
      <Button
        position={[-2, -2, -2]}
        rotation={[
          0,
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(180),
        ]}
        onClick={handleBackCCW}
      />
      <Button
        position={[-2, -2, 2]}
        rotation={[0, 0, THREE.MathUtils.degToRad(180)]}
        onClick={handleLeftCCW}
      />
      <Button
        position={[-2, -2, 2]}
        rotation={[
          0,
          THREE.MathUtils.degToRad(180),
          THREE.MathUtils.degToRad(180),
        ]}
        onClick={handleFrontCW}
      />
      <Button
        position={[2, 2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(90),
          0,
        ]}
        onClick={handleTopCCW}
      />
      <Button
        position={[2, 2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(-90),
          0,
        ]}
        onClick={handleRightCW}
      />
      <Button
        position={[2, -2, 2]}
        rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        onClick={handleRightCCW}
      />
      <Button
        position={[2, -2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(180),
          0,
        ]}
        onClick={handleBottomCW}
      />
      <Button
        position={[-2, -2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(90),
          0,
        ]}
        onClick={handleLeftCW}
      />
      <Button
        position={[-2, -2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(-90),
          0,
        ]}
        onClick={handleBottomCCW}
      />
      <Button
        position={[-2, 2, 2]}
        rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        onClick={handleTopCW}
      />
      <Button
        position={[-2, 2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(180),
          0,
        ]}
        onClick={handleLeftCCW}
      />
      <Button
        position={[2, 2, -2]}
        rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
        onClick={handleRightCCW}
      />
      <Button
        position={[2, 2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(180),
          0,
        ]}
        onClick={handleTopCW}
      />
      <Button
        position={[2, -2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(90),
          0,
        ]}
        onClick={handleBottomCCW}
      />
      <Button
        position={[2, -2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(-90),
          0,
        ]}
        onClick={handleRightCW}
      />
      <Button
        position={[-2, -2, -2]}
        rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
        onClick={handleBottomCW}
      />
      <Button
        position={[-2, -2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(180),
          0,
        ]}
        onClick={handleLeftCCW}
      />
      <Button
        position={[-2, 2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(90),
          0,
        ]}
        onClick={handleLeftCW}
      />
      <Button
        position={[-2, 2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          THREE.MathUtils.degToRad(-90),
          0,
        ]}
        onClick={handleTopCCW}
      />
      <Button
        position={[2, 2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          0,
          THREE.MathUtils.degToRad(-90),
        ]}
        onClick={handleTopCW}
      />
      <Button
        position={[2, 2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          0,
          THREE.MathUtils.degToRad(-90),
        ]}
        onClick={handleFrontCCW}
      />
      <Button
        position={[2, 2, -2]}
        rotation={[0, 0, THREE.MathUtils.degToRad(-90)]}
        onClick={handleBackCW}
      />
      <Button
        position={[2, 2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(180),
          0,
          THREE.MathUtils.degToRad(-90),
        ]}
        onClick={handleTopCCW}
      />
      <Button
        position={[2, -2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          0,
          THREE.MathUtils.degToRad(-90),
        ]}
        onClick={handleBackCCW}
      />
      <Button
        position={[2, -2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          0,
          THREE.MathUtils.degToRad(-90),
        ]}
        onClick={handleBottomCW}
      />
      <Button
        position={[2, -2, 2]}
        rotation={[0, 0, THREE.MathUtils.degToRad(-90)]}
        onClick={handleBottomCCW}
      />
      <Button
        position={[2, -2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(180),
          0,
          THREE.MathUtils.degToRad(-90),
        ]}
        onClick={handleFrontCW}
      />
      <Button
        position={[-2, 2, 2]}
        rotation={[0, 0, THREE.MathUtils.degToRad(90)]}
        onClick={handleTopCCW}
      />
      <Button
        position={[-2, 2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(180),
          0,
          THREE.MathUtils.degToRad(90),
        ]}
        onClick={handleFrontCW}
      />
      <Button
        position={[-2, 2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          0,
          THREE.MathUtils.degToRad(90),
        ]}
        onClick={handleTopCW}
      />
      <Button
        position={[-2, 2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          0,
          THREE.MathUtils.degToRad(90),
        ]}
        onClick={handleBackCCW}
      />
      <Button
        position={[-2, -2, -2]}
        rotation={[0, 0, THREE.MathUtils.degToRad(90)]}
        onClick={handleBackCW}
      />
      <Button
        position={[-2, -2, -2]}
        rotation={[
          THREE.MathUtils.degToRad(180),
          0,
          THREE.MathUtils.degToRad(90),
        ]}
        onClick={handleBottomCCW}
      />
      <Button
        position={[-2, -2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(90),
          0,
          THREE.MathUtils.degToRad(90),
        ]}
        onClick={handleFrontCCW}
      />
      <Button
        position={[-2, -2, 2]}
        rotation={[
          THREE.MathUtils.degToRad(-90),
          0,
          THREE.MathUtils.degToRad(90),
        ]}
        onClick={handleBottomCW}
      />
      <group ref={rotationGroupRef} />
    </>
  )
}

function rotate(
  rubiksCubeRef: THREE.Group,
  rotationGroupRef: THREE.Group,
  axis: string,
  limit: number,
  multiplier: number,
  setIsRotating: (value: boolean) => void,
) {
  rotationGroupRef.children
    .slice()
    .reverse()
    .forEach(function (c: THREE.Object3D) {
      rubiksCubeRef.attach(c)
    })
  rotationGroupRef.quaternion.set(0, 0, 0, 1)

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
    onComplete: () => {
      setIsRotating(false)
    },
  })
}

function ColorPadAndArrowGroup({
  index,
  coordinates,
  rotation,
}: {
  index: number
  coordinates: THREE.Vector3
  rotation: THREE.Euler
}) {

  return (
    <group rotation={rotation}>
      <ColorPad
        color={
          Math.abs(coordinates.x) === 2 &&
          Math.abs(coordinates.y) === 2 &&
          Math.abs(coordinates.z) === 2
            ? new THREE.Color(0xff0000)
            : new THREE.Color(0xffffff)
        }
      />
    </group>
  )
}

function CubeGroup({ coordinates }: { coordinates: THREE.Vector3 }) {
  function setRoundedCubeType(coordinates: THREE.Vector3) {
    let maxNumberOfPads = 3
    Object.entries(coordinates).forEach(([_, value]) => {
      if (value === 0) maxNumberOfPads -= 1
    })
    return maxNumberOfPads
  }

  function setColorPadRotation(coordinates: THREE.Vector3, index: number) {
    const createEuler = (x: number, y: number, z: number) =>
      new THREE.Euler(
        THREE.MathUtils.degToRad(x),
        THREE.MathUtils.degToRad(y),
        THREE.MathUtils.degToRad(z),
      )

    let rotationX = 0,
      rotationY = 0,
      rotationZ = 0

    if (index === 0) {
      if (coordinates.y === -2) rotationZ = 180
      else if (coordinates.y === 0) {
        if (coordinates.x === 2) rotationZ = -90
        else if (coordinates.x === -2) rotationZ = 90
        else {
          coordinates.z > 0 ? (rotationX = 90) : (rotationX = -90)
        }
      }
    } else if (index === 1) {
      if (coordinates.y === -2) {
        if (coordinates.z === 2) rotationX = 90
        else if (coordinates.z === -2) (rotationX = -90), (rotationY = 90)
        else {
          coordinates.x > 0 ? (rotationZ = -90) : (rotationZ = 90)
        }
      } else if (coordinates.y === 0) {
        coordinates.z > 0 ? (rotationX = 90) : (rotationX = -90)
      } else {
        if (coordinates.x === 2) rotationZ = -90
        else if (coordinates.x === -2) rotationZ = 90
        else {
          coordinates.z > 0 ? (rotationX = 90) : (rotationX = -90)
        }
      }
    } else {
      if (coordinates.y === -2) {
        coordinates.x > 0 ? (rotationZ = -90) : (rotationZ = 90)
      } else {
        coordinates.z > 0 ? (rotationX = 90) : (rotationX = -90)
      }
    }

    return createEuler(rotationX, rotationY, rotationZ)
  }

  function setColorPads(coordinates: THREE.Vector3) {
    return (
      <>
        {[...Array(setRoundedCubeType(coordinates))].map((_, index) => {
          return (
            <ColorPadAndArrowGroup
              index={index}
              coordinates={coordinates}
              rotation={setColorPadRotation(coordinates, index)}
            />
          )
        })}
      </>
    )
  }

  return (
    <group position={coordinates}>
      <RoundedCube />
      {setColorPads(coordinates)}
    </group>
  )
}

function RubiksCubeScene() {
  const rubiksCubeRef = useRef<THREE.Group>(null!)

  function setCoordinate(value: number) {
    return value * 2 - 2
  }

  return (
    <>
      <group ref={rubiksCubeRef}>
        {[...Array(3)].map((_, x) =>
          [...Array(3)].map((_, y) =>
            [...Array(3)].map((_, z) => {
              const coordinateX = setCoordinate(x)
              const coordinateY = setCoordinate(y)
              const coordinateZ = setCoordinate(z)

              return (
                <>
                  {!(
                    coordinateX === 0 &&
                    coordinateY === 0 &&
                    coordinateZ === 0
                  ) && (
                    <CubeGroup
                      coordinates={
                        new THREE.Vector3(coordinateX, coordinateY, coordinateZ)
                      }
                    />
                  )}
                </>
              )
            }),
          ),
        )}
      </group>
      {/* <ArrowsGroup /> */}
      <RotattionGroup rubiksCubeRef={rubiksCubeRef} />
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
