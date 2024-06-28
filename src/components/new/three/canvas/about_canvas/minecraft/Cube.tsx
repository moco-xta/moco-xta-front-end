import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThreeEvent } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'

import { CubeInterface } from '@/interfaces/new/minecraftInterfaces'

import { AppDispatch } from '@/redux/store'
import { addCube, removeCube } from '@/redux/slice/minecraftSlice'

import minecraftTextures from '../../../materials/about/minecraft/minecraftTextures'

import { default as minecraftConstants } from '@/constants/new/canvas/about/minecraft/minecraftConstants.json'

export const Cube = ({ position, texture }: CubeInterface) => {
  const dispatch = useDispatch<AppDispatch>()

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const [ref] = useBox<THREE.Mesh>(() => ({
    type: 'Static',
    position,
  }))

  const activeTexture: THREE.Texture = minecraftTextures[texture + 'Texture']

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
      dispatch(addCube([x + minecraftConstants.SCALE, y, z]))
      return
    } else if (clickedFace === 1) {
      dispatch(addCube([x - minecraftConstants.SCALE, y, z]))
      return
    } else if (clickedFace === 2) {
      dispatch(addCube([x, y + minecraftConstants.SCALE, z]))
      return
    } else if (clickedFace === 3) {
      dispatch(addCube([x, y - minecraftConstants.SCALE, z]))
      return
    } else if (clickedFace === 4) {
      dispatch(addCube([x, y, z + minecraftConstants.SCALE]))
      return
    } else if (clickedFace === 5) {
      dispatch(addCube([x, y, z - minecraftConstants.SCALE]))
      return
    }
  }

  return (
    <mesh
      ref={ref}
      receiveShadow
      castShadow
      onPointerMove={handleOnPointerMove}
      onPointerOut={handleOnPointerOut}
      onClick={handleOnClick}
    >
      <boxGeometry
        attach='geometry'
        args={[minecraftConstants.SCALE, minecraftConstants.SCALE, minecraftConstants.SCALE]}
      />
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
