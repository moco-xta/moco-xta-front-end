import { useTexture } from '@react-three/drei'
import { BackSide } from 'three'

export default function SkyBox() {
  const texture = useTexture('/image.png')

  return (
    <mesh
      userData={{ lensflare: 'no-occlusion' }}
      scale={[-1, 1, 1]}
      castShadow={false}
      receiveShadow={false}
    >
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial
        toneMapped={false}
        map={texture}
        side={BackSide}
      />
    </mesh>
  )
}
