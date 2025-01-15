import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function useGlbLoader(path: string) {
  return useLoader(GLTFLoader, path)
}
