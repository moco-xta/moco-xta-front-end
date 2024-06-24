import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThreeEvent } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'

import { CubeInterface } from '@/interfaces/new/minecraftInterfaces'

import { AppDispatch } from '@/redux/store'
import { addCube, removeCube } from '@/redux/slice/minecraftSlice'

import textures from './textures'

export const Cube = ({ position, texture }: CubeInterface) => {
  const dispatch = useDispatch<AppDispatch>()

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const [ref] = useBox<THREE.Mesh>(() => ({
    type: 'Static',
    position,
  }))

  const activeTexture: THREE.Texture = textures[texture + 'Texture']

  const handleOnPointerMove = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    setIsHovered(true)
  }

  const handleOnPointerOut = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    setIsHovered(false)
  }

  const handleOnClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    const clickedFace = Math.floor(e.faceIndex! / 2)
    const { x, y, z } = ref.current!.position
    if (e.altKey) {
      dispatch(removeCube([x, y, z]))
      return
    } else if (clickedFace === 0) {
      dispatch(addCube([x + 1, y, z]))
      return
    } else if (clickedFace === 1) {
      dispatch(addCube([x - 1, y, z]))
      return
    } else if (clickedFace === 2) {
      dispatch(addCube([x, y + 1, z]))
      return
    } else if (clickedFace === 3) {
      dispatch(addCube([x, y - 1, z]))
      return
    } else if (clickedFace === 4) {
      dispatch(addCube([x, y, z + 1]))
      return
    } else if (clickedFace === 5) {
      dispatch(addCube([x, y, z - 1]))
      return
    }
  }

  return (
    <mesh
      ref={ref}
      onPointerMove={handleOnPointerMove}
      onPointerOut={handleOnPointerOut}
      onClick={handleOnClick}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        attach='material'
        color={isHovered ? 'grey' : 'white'}
        map={activeTexture}
        transparent={true}
        opacity={texture === 'glass' ? 0.6 : 1}
      />
    </mesh>
  )
}
