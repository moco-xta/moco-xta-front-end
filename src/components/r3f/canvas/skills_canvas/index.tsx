import React, {
  RefObject,
  Suspense,
  createRef,
  useEffect,
  useMemo,
} from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { getProject, val } from '@theatre/core'
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f'

import { SkillsLogoInterface } from '@/interfaces/dataInterfaces'
import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

import { skillsData } from '@/data/skillsData'

import { SkillsPattern } from '@/components/r3f/models/skills/SkillsPattern'

import { default as SkillsConstants } from '@/constants/skillsConstants.json'

studio.extend(extension)
studio.initialize()

function SkillsScene() {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  useFrame(() => {
    const sequenceLength = val(sheet!.sequence.pointer.length)
    sheet!.sequence.position = scroll.offset * sequenceLength
  })

  function useSetRefs(category: string, data: SkillsLogoInterface[]) {
    return useMemo(
      () =>
        data
          .filter((logo) => logo.category === category)
          .map(() => ({
            ref: createRef<ForwardRefGltfGroupInterface>(),
          })),
      [data, category],
    )
  }

  const logosGraphicsRefs = useSetRefs('graphics', skillsData)
  const logos3DRefs = useSetRefs('3D', skillsData)
  const logosFrontEndFrameworkRefs = useSetRefs(
    'front_end_framework',
    skillsData,
  )
  const logosMobileFrameworkRefs = useSetRefs('mobile_framework', skillsData)
  const logosFrontEndLanguageRefs = useSetRefs('front_end_language', skillsData)
  const logosFrontEndLibraryRefs = useSetRefs('front_end_library', skillsData)
  const logosFrontEndGraphicsRefs = useSetRefs('front_end_graphics', skillsData)
  const logosPackageManagerRefs = useSetRefs('package_manager', skillsData)
  const logosBackendFrameworkRefs = useSetRefs('back_end_framework', skillsData)
  const logosBackendLanguageRefs = useSetRefs('back_end_language', skillsData)
  const logosHostingRefs = useSetRefs('hosting', skillsData)
  const logosToolRefs = useSetRefs('tool', skillsData)
  const logosDatabaseRefs = useSetRefs('database', skillsData)

  function setPosition(
    data: SkillsLogoInterface[],
    category: string,
    refs: { ref: RefObject<ForwardRefGltfGroupInterface> }[],
  ) {
    let sum = 0
    data
      .filter((logo) => logo.category === category)
      .forEach((logo, index) => {
        const { ref } = refs[index]
        if (ref.current) {
          const width = ref.current.width * logo.geometry.scale.x
          if (index === 0) {
            ref.current.position.x = sum
            sum += width / 2
          } else {
            ref.current.position.x = sum + width / 2 + index * 0.8
            sum += width
          }
        }
      })
  }

  useEffect(() => {
    setPosition(skillsData, 'graphics', logosGraphicsRefs)
    setPosition(skillsData, '3D', logos3DRefs)
    setPosition(skillsData, 'front_end_framework', logosFrontEndFrameworkRefs)
    setPosition(skillsData, 'mobile_framework', logosMobileFrameworkRefs)
    setPosition(skillsData, 'front_end_language', logosFrontEndLanguageRefs)
    setPosition(skillsData, 'front_end_library', logosFrontEndLibraryRefs)
    setPosition(skillsData, 'front_end_graphics', logosFrontEndGraphicsRefs)
    setPosition(skillsData, 'package_manager', logosPackageManagerRefs)
    setPosition(skillsData, 'back_end_framework', logosBackendFrameworkRefs)
    setPosition(skillsData, 'back_end_language', logosBackendLanguageRefs)
    setPosition(skillsData, 'database', logosDatabaseRefs)
    setPosition(skillsData, 'hosting', logosHostingRefs)
    setPosition(skillsData, 'tool', logosToolRefs)
  }, [logosGraphicsRefs, logosFrontEndFrameworkRefs, logosMobileFrameworkRefs])

  function getLogos(
    groupPosition: THREE.Vector3,
    data: SkillsLogoInterface[],
    category: string,
    refs: { ref: RefObject<ForwardRefGltfGroupInterface> }[],
  ) {
    return (
      <group position={groupPosition}>
        {data
          .filter((logo) => logo.category === category)
          .map((logo, index) => {
            const Logo = logo.component
            const { ref } = refs[index]
            return (
              <Logo
                key={`${category}_${index}`}
                ref={ref}
                position={logo.geometry.position}
                rotation={logo.geometry.rotation}
                scale={logo.geometry.scale}
              />
            )
          })}
      </group>
    )
  }

  return (
    <>
      <SkillsPattern />
      {getLogos(
        new THREE.Vector3(0, 0, 0),
        skillsData,
        'graphics',
        logosGraphicsRefs,
      )}
      {getLogos(new THREE.Vector3(0, 0, -2), skillsData, '3D', logos3DRefs)}
      {getLogos(
        new THREE.Vector3(0, 0, -4),
        skillsData,
        'front_end_framework',
        logosFrontEndFrameworkRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -6),
        skillsData,
        'mobile_framework',
        logosMobileFrameworkRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -8),
        skillsData,
        'front_end_language',
        logosFrontEndLanguageRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -10),
        skillsData,
        'front_end_library',
        logosFrontEndLibraryRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -12),
        skillsData,
        'front_end_graphics',
        logosFrontEndGraphicsRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -14),
        skillsData,
        'package_manager',
        logosPackageManagerRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -16),
        skillsData,
        'back_end_framework',
        logosBackendFrameworkRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -18),
        skillsData,
        'back_end_language',
        logosBackendLanguageRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -20),
        skillsData,
        'database',
        logosDatabaseRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -22),
        skillsData,
        'hosting',
        logosHostingRefs,
      )}
      {getLogos(
        new THREE.Vector3(0, 0, -24),
        skillsData,
        'tool',
        logosToolRefs,
      )}
    </>
  )
}

export default function SkillsCanvas() {
  const sheet = getProject('Skills scene').sheet('Scene')

  return (
    <Canvas
      dpr={SkillsConstants.SCENE.CANVAS.DPR}
      shadows
      linear
      flat
      gl={{
        antialias: SkillsConstants.SCENE.CANVAS.ANTIALIAS,
        powerPreference: SkillsConstants.SCENE.CANVAS.POWER_PREFERENCE,
        preserveDrawingBuffer:
          SkillsConstants.SCENE.CANVAS.PRESERVE_DRAWING_BUFFER,
      }}
    >
      <OrbitControls />
      <ScrollControls
        pages={5}
        damping={1}
        maxSpeed={1}
      >
        <SheetProvider sheet={sheet}>
          <PerspectiveCamera
            theatreKey='Camera'
            makeDefault
            position={[0, 0, -20]}
            fov={90}
            near={0.1}
            far={70}
          />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <SkillsScene />
          </Suspense>
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  )
}
