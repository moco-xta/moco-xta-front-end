import React from 'react'
import { usePlane } from '@react-three/cannon'

export default function PhysicsGround() {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }))

  return (
    <mesh ref={ref}>
      <planeGeometry
        attach='geometry'
        args={[100, 100]}
      />
      <meshStandardMaterial
        attach='material'
        transparent={true}
        opacity={0}
      />
    </mesh>
  )
}
