import React from 'react'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { useControls } from 'leva'

export default function LightBox() {
  const { transmission, thickness, roughness, envMapIntensity } = useControls({
    transmission: { value: 1, min: 0.9, max: 1 },
    thickness: { value: 0.2, min: 0, max: 2 },
    roughness: { value: 0.1, min: 0, max: 1 },
    envMapIntensity: { value: 2, min: 0, max: 5 },
  })

  return (
    <mesh
      castShadow
      receiveShadow
    >
      <boxGeometry args={[12.5, 12.5, 12.5]} />
      <MeshTransmissionMaterial
        backside
        samples={8}
        resolution={1024}
        transmission={transmission}
        thickness={thickness}
        roughness={roughness}
        chromaticAberration={0.04}
        anisotropy={0.1}
        distortion={0.1}
        distortionScale={0.1}
        temporalDistortion={0.2}
        clearcoat={0.2}
        envMapIntensity={envMapIntensity}
      />
    </mesh>
  )
}
