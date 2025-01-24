import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Text3D } from '@react-three/drei'
import { gsap } from 'gsap'

import ProjectLogo from './ProjectLogo'
import ToolsLogosGroups from './ToolsLogosGroups'
import ProjectImage from './ProjectImage'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'
import { getDegreeEuler } from '@/helpers/threeHelpers'

import { projectsData } from '@/data/projects/projectsData'
import { companiesData } from '@/data/projects/companiesData'
import { locationsData } from '@/data/projects/locationsData'

export type TProjectScene = {
  currentProject: number
  currentCompany: number
  currentLocation: number
} //TODO: To types

const OFFSET = 8 //TODO: To data
const VERTICAL_OFFSET = -1 //TODO: To data
const MAP_SCALE = 1.5

export default function ProjectsScene({
  currentProject,
  currentCompany,
  currentLocation,
}: TProjectScene) {
  const projectLogosGroupRef = useRef<THREE.Group>(null!)
  const companiesGroupRef = useRef<THREE.Group>(null!)
  const projectsImagesGroupRef = useRef<THREE.Group>(null!)
  const locationsGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    gsap.to(projectLogosGroupRef.current.position, {
      y: OFFSET * currentProject,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [currentProject])

  useEffect(() => {
    gsap.to(companiesGroupRef.current.position, {
      y: OFFSET * currentCompany,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [currentCompany])

  useEffect(() => {
    gsap.to(projectsImagesGroupRef.current.position, {
      y: OFFSET * currentProject,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
      delay: 0.2,
    })
  }, [currentProject])

  useEffect(() => {
    gsap.to(locationsGroupRef.current.position, {
      x: -locationsData[currentLocation].gpsCoordinates.longitude * MAP_SCALE - 2,
      y: VERTICAL_OFFSET,
      z: locationsData[currentLocation].gpsCoordinates.latitude * MAP_SCALE,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
      delay: 0.2,
    })
  }, [currentLocation])

  return (
    <>
      <group ref={projectLogosGroupRef}>
        {projectsData.map((projectData, index) => (
          <ProjectLogo
            key={`project_logo_${projectData.key}`}
            path={projectData.logos.path}
            prefix={projectData.logos.prefix}
            logoData={projectData.logos.project}
            position={new THREE.Vector3(4, -OFFSET * index + 1, 1)}
            rotation={getDegreeEuler({ y: -33 })}
            maxSize={7}
          />
        ))}
      </group>
      <group ref={companiesGroupRef}>
        {companiesData
          .filter((companyData) => companyData.hasOwnProperty('logo'))
          .map((companyData) => (
            <ProjectLogo
              key={`project_logo_${companyData.key}`}
              path={companyData.logo!.path}
              prefix={companyData.logo!.prefix}
              logoData={companyData.logo!.logo!}
              position={new THREE.Vector3(3.3, -OFFSET * companyData.index! - 1.5, 3.5)}
              // position={new THREE.Vector3(3, -OFFSET * (index + 1) - 1, 2)}
              rotation={getDegreeEuler({ y: -50 })}
              maxSize={2.2}
            />
          ))}
      </group>
      <group
        ref={projectsImagesGroupRef}
        name={'projects_images_group'}
      >
        {/* {projectsData.map((projectData, index) => (
          <Box position={new THREE.Vector3(-3, -OFFSET * index + 0.5, 2.5)} />
        ))} */}
        {projectsData.map((projectData, index) => (
          <>
            <ProjectImage
              key={`project_image_${projectData.key}`}
              position={new THREE.Vector3(-3, -OFFSET * index + 0.5, 2.5)}
              imageUrl={projectData.imageUrl}
            />
            {/* <Html
              scale={0.1}
              style={{ userSelect: 'none', opacity: '0.5' }}
              castShadow
              receiveShadow
              occlude='blending'
              transform
              position={new THREE.Vector3(-3, -OFFSET * index + 0.5, 2.5)}
            >
              <iframe
                title='embed'
                width={1600}
                height={900}
                src={projectData.url}
              />
            </Html> */}
          </>
        ))}
      </group>
      <group
        ref={locationsGroupRef}
        /* position={
          new THREE.Vector3(
            -locationsData[currentLocation].location.longitude,
            VERTICAL_OFFSET,
            -locationsData[currentLocation].location.latitude,
          )
        } */
      >
        {locationsData.map((locationData) => (
          <group key={`location_${locationData.city}`}>
            <ProjectLogo
              path={locationData.flag.path}
              prefix={locationData.flag.prefix}
              logoData={locationData.flag.flag!}
              position={
                new THREE.Vector3(
                  locationData.gpsCoordinates.longitude * MAP_SCALE - 2,
                  VERTICAL_OFFSET,
                  -locationData.gpsCoordinates.latitude * MAP_SCALE,
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
                  locationData.gpsCoordinates.longitude * MAP_SCALE + 0.75 - 2,
                  VERTICAL_OFFSET - 0.2,
                  -locationData.gpsCoordinates.latitude * MAP_SCALE + 0.1,
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
      <ToolsLogosGroups currentProject={currentProject} />
    </>
  )
}
