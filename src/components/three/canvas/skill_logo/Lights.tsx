import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[5, 5, 5]}
        intensity={1}
        angle={0.15}
        penumbra={1}
        decay={0}
        castShadow
      />
      <spotLight
        position={[-5, 5, 5]}
        intensity={1}
        angle={0.15}
        penumbra={1}
        decay={0}
        castShadow
      />
      <spotLight
        position={[0, 0, 5]}
        intensity={1}
        angle={0.15}
        penumbra={1}
        decay={0}
        castShadow
      />
    </>
  )
}
