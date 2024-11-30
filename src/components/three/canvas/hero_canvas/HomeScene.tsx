import React from 'react'
import * as THREE from 'three'

import PhoneNumberScene from './phone_number_scene/PhoneNumberScene'
import FrontEndDevelopperWithExtraSkillsScene from './front_end_developper_with_extra_skills/FrontEndDevelopperWithExtraSkillsScene'

export default function HomeScene() {
  return (
    <>
      {/* <group position={new THREE.Vector3(0, 0, 0)}> */}
      <group position={new THREE.Vector3(0, 5, 0)}>
        {/* <group position={new THREE.Vector3(0, 15, 0)}> */}
        <PhoneNumberScene />
        <FrontEndDevelopperWithExtraSkillsScene />
        {/* <group position={new THREE.Vector3(0, 0, 0)}>
          <Box args={[0.1, 0.1, 0.1]} />
          <Hi />
          <Me />
          <Im />
          <Federico />
        </group> */}
      </group>
      {/* <A />
      <Developper />
      <With />
      <Extra />
      <Skills /> */}
      {/*
        <Axis />
        <Me />
        <Map />
      <group position={new THREE.Vector3(0, 7, 0)}>
      </group> */}
    </>
  )
}
