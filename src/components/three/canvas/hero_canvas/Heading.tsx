import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Text, Text3D, useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Letter3D from './Letter3D'

import './index.scss'

export default function Heading() {
  const [creativeText] = useState<string>('creative'.toUpperCase())
  const [creativeTextSplitted] = useState<string[]>(creativeText.split(''))

  let length = 0

  const creativeRef = useRef<THREE.Group>(null!)
  const creativeTextRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    console.log('creativeTextRef', creativeTextRef)
  }, [creativeTextRef])

  useEffect(() => {
    if (creativeRef.current) {
      let length = 0
      creativeRef.current.children.forEach((child, index) => {
        // console.log(child)
        // @ts-ignore
        child.position.x = length
        console.log(length)
        // @ts-ignore
        // console.log(child.geometry.translate())
        // @ts-ignore
        child.geometry.computeBoundingBox()
        // @ts-ignore
        console.log('boundingBox', child.geometry.boundingBox)
        // @ts-ignore
        console.log('child.geometry.boundingBox.max.x', child.geometry.boundingBox.max.x)
        // @ts-ignore
        console.log('child.geometry.boundingBox.min.x', child.geometry.boundingBox.min.x)
        // @ts-ignore
        console.log(
          'child.geometry.boundingBox.max.x - child.geometry.boundingBox.min.x',
          child.geometry.boundingBox.max.x - child.geometry.boundingBox.min.x,
        )
        // @ts-ignore
        length += child.geometry.boundingBox.max.x - child.geometry.boundingBox.min.x + 0.05
      })
    }
  }, [creativeRef])

  useGSAP(() => {
    let projects = gsap.utils.toArray(creativeRef.current.children)
    projects.forEach((project, i) => {
      // @ts-ignore
      gsap.from(project.position, {
        y: -1,
        delay: 0.1 * i,
        duration: 0.5,
        ease: 'none',
      })
      // @ts-ignore
      gsap.from(project.material, {
        opacity: -1,
        delay: 0.1 * i,
        duration: 0.5,
        ease: 'none',
      })
    })
  })

  return (
    <group
      ref={creativeRef}
      position={[0, 20, 0]}
    >
      <Text3D
        ref={creativeTextRef}
        position={[0, 1, 0]}
        font='fonts/json/Gilroy_Heavy.json'
        receiveShadow
        castShadow
      >
        {creativeText}
        <meshStandardMaterial
          color={'white'}
          transparent
          opacity={0.1}
        />
      </Text3D>
      {creativeTextSplitted.map((letter, index) => {
        const letter3DRef = useRef<THREE.Mesh>(null!)

        useHelper(letter3DRef, THREE.BoxHelper, 'red')

        useEffect(() => {
          if (letter3DRef.current) {
            letter3DRef.current.position.x = length
            letter3DRef.current.geometry.computeBoundingBox()
            length +=
              // @ts-ignore
              letter3DRef.current.geometry.boundingBox.max.x -
              // @ts-ignore
              letter3DRef.current.geometry.boundingBox.min.x +
              0.05
          }
        }, [letter3DRef])

        return (
          <Text3D
            ref={letter3DRef}
            key={`creative_letter_${letter}_${index}`}
            position={[0, 0, 0]}
            font='fonts/json/Gilroy_Heavy.json'
            receiveShadow
            castShadow
          >
            {letter}
            <meshStandardMaterial
              color={'white'}
              transparent
            />
          </Text3D>
        )
      })}
    </group>
  )
}
