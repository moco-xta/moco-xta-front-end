import React, { useRef } from 'react'
import * as THREE from 'three'
import { Center, Text3D } from '@react-three/drei'
import { useLenis } from 'lenis/react'

import { skillsData } from '@/data/skills/skillsData'
import useLenisScroll from '@/hooks/useLenisScroll'

export default function SkillScene() {
  const skillsGroupRef = useRef<THREE.Group>(null!)
  const centerRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  useLenis((lenis) => {
    skillsGroupRef.current.position.y = lenis.targetScroll * 0.01
  })

  return (
    <group ref={skillsGroupRef}>
      {skillsData.map((skill, index) => {
        return (
          <group>
            <Center
              ref={centerRef}
              position={[0, -2 * index, 0]}
              rotation={[0, THREE.MathUtils.degToRad(15 * index), 0]}
            >
              <Text3D
                key={`skill_${skill.skill}`}
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                height={0.5}
                lineHeight={0.5}
                letterSpacing={-0.06}
                size={1.5}
                font='fonts/json/Inter_Bold.json'
              >
                {skill.skill}
                <meshNormalMaterial />
              </Text3D>
            </Center>
            <Center
              ref={centerRef}
              position={[0, -2 * index, 0]}
              rotation={[0, THREE.MathUtils.degToRad(15 * index), 0]}
            >
              <Text3D
                key={`skill_${skill.label}_${index}`}
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                height={0.5}
                lineHeight={0.5}
                letterSpacing={-0.06}
                size={0.5}
                font='fonts/json/Inter_Bold.json'
              >
                {skill.label}
                <meshNormalMaterial />
              </Text3D>
            </Center>
          </group>
        )
      })}
    </group>
  )
}
