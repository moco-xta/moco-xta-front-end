import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Text3D } from '@react-three/drei'
import { gsap } from 'gsap'

import type { TLocations } from '@/types/components/layout/types'

import ProjectLogo from './ProjectLogo'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import { locationsData } from '@/data/projects/locationsData'
import { layoutData } from '@/data/projects/three/layoutData'

export default function Locations({ currentLocation }: TLocations) {
  const locationsGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    gsap.to(locationsGroupRef.current.position, {
      x:
        -locationsData[currentLocation].gpsCoordinates.longitude * layoutData.locations.scale +
        layoutData.locations.position.x,
      y: layoutData.locations.position.y,
      z: locationsData[currentLocation].gpsCoordinates.latitude * layoutData.locations.scale,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
      delay: 0.2,
    })
  }, [currentLocation])

  return (
    <group ref={locationsGroupRef}>
      {locationsData.map((locationData) => (
        <group key={`location_${locationData.city}`}>
          <ProjectLogo
            path={locationData.flag.path}
            prefix={locationData.flag.prefix}
            logoData={locationData.flag.flag!}
            position={
              new THREE.Vector3(
                locationData.gpsCoordinates.longitude * layoutData.locations.scale +
                  layoutData.locations.position.x,
                layoutData.locations.position.y,
                -locationData.gpsCoordinates.latitude * layoutData.locations.scale,
              )
            }
            maxSize={1.1}
          />
          <Text3D
            curveSegments={32}
            height={0.1}
            lineHeight={0.5}
            letterSpacing={0}
            size={0.5}
            font='/fonts/json/Saira_Condensed_Light_Regular.json'
            position={
              new THREE.Vector3(
                locationData.gpsCoordinates.longitude * layoutData.locations.scale +
                  0.75 +
                  layoutData.locations.position.x,
                layoutData.locations.position.y - 0.2,
                -locationData.gpsCoordinates.latitude * layoutData.locations.scale + 0.1,
              )
            }
            receiveShadow
            castShadow
          >
            {capitalizeFirstLetter(locationData.city)} ({locationData.country})
            <meshStandardMaterial />
          </Text3D>
        </group>
      ))}
    </group>
  )
}
