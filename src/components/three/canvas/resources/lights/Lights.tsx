import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      {/* <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.2}
        color='white'
        castShadow
        shadow-mapSize={[512, 512]}
      /> */}
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.25}
        castShadow
      />
      <directionalLight
        position={[-10, 10, 10]}
        intensity={1.25}
        castShadow
      />
      <directionalLight
        position={[0, 0, 10]}
        intensity={1.25}
        castShadow
      />
    </>
  )
}
