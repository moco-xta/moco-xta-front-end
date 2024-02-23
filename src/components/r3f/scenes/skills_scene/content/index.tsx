import React from 'react'

export default function Content() {
  return (
    <>
      <ambientLight />
      <pointLight
        position={[10, 10, 10]}
      />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='orange' />
      </mesh>
    </>
  )
}
