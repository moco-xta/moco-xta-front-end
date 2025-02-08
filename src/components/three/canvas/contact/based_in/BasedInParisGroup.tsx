import React, { /* useEffect, useLayoutEffect, */ useRef } from 'react'
import * as THREE from 'three'
// import { useThree } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

// import ImBasedinParisTextsGroup from './texts/ImBasedInParisTextsGroup'
import BorderLine from '@/components/three/models/contact/BorderLine'
import Dot from '@/components/three/models/contact/Dot'
import DotOutlined from '@/components/three/models/contact/DotOutlined'
import DotTerminus from '@/components/three/models/contact/DotTerminus'
import DotWithArrow from '@/components/three/models/contact/DotWithArrow'
import ImBasedInParis from '@/components/three/models/contact/ImBasedInParis'
import Ligne4 from '@/components/three/models/contact/Ligne4'
import Ligne12 from '@/components/three/models/contact/Ligne12'
import Ligne12Line from '@/components/three/models/contact/Ligne12Line'
import Ligne12SmallBlock from '@/components/three/models/contact/Ligne12SmallBlock'
import MetroArrow from '@/components/three/models/contact/MetroArrow'
import MMetroLarge from '@/components/three/models/contact/MMetroLarge'
import MMetroSmall from '@/components/three/models/contact/MMetroSmall'
import Paris from '@/components/three/models/contact/Paris'
import StationAbbesses from '@/components/three/models/contact/StationAbbesses'
import StationJulesJoffrin from '@/components/three/models/contact/StationJulesJoffrin'
import StationLamarckColaincourt from '@/components/three/models/contact/StationLamarckColaincourt'
import StationMarcadetPoissonniers from '@/components/three/models/contact/StationMarcadetPoissonniers'
import StationMarxDormoy from '@/components/three/models/contact/StationMarxDormoy'
import StationPigalle from '@/components/three/models/contact/StationPigalle'
import StationPorteDeLaChapelle from '@/components/three/models/contact/StationPorteDeLaChapelle'

import {
  getBasedInGroupAnimationsData,
  // getBasedInGroupDefaultValues,
} from '@/data/contact/three/based_in/basedInGroupData'

import { showHide/* , animate */ } from '@/animation/index'

export default function BasedInParisGroup() {
  const { timeline } = useGSAPTimelineContext()
  // const { scene } = useThree()

  const contactMeGroupRef = useRef<THREE.Group>(null!)
  useHelper(contactMeGroupRef, THREE.BoxHelper, 'red')
  const contactMeSubGroupRef = useRef<THREE.Group>(null!)
  useHelper(contactMeSubGroupRef, THREE.BoxHelper, 'blue')

  /* useEffect(() => {
    if (contactMeGroupRef.current) {
      const box = new THREE.Box3().setFromObject(contactMeGroupRef.current)
      const center = new THREE.Vector3()
      box.getCenter(center) // Get the center of the bounding box

      // Reposition all children so the center becomes (0, 0, 0)
      contactMeGroupRef.current.children.forEach((child) => {
        child.position.sub(center)
      })

      // Move the group itself to the original center position
      contactMeGroupRef.current.position.add(center)
    }
  }, [scene]) */

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: contactMeGroupRef.current,
        animationsData: getBasedInGroupAnimationsData(),
      })
      /* animate({
        timeline: timeline,
        ref: contactMeGroupRef.current,
        animationsData: getBasedInGroupAnimationsData(),
      }) */
    },
    { scope: contactMeGroupRef },
  )

  return (
    <group
      ref={contactMeGroupRef}
      position={[0, 0, 0]}
      // {...getBasedInGroupDefaultValues()}
    >
      <group
        ref={contactMeSubGroupRef}
        position={[1, 1, 0]}
      >
        <BorderLine position={[6.3, -1.17, 0]} />
        <Dot position={[4.74, -2.062, -0.001]} />
        <Dot position={[4.74, -2.4158, -0.001]} />
        <Dot position={[4.74, -3.111, -0.001]} />
        <DotOutlined position={[4.74, -1.707, -0.001]} />
        <DotOutlined position={[4.74, -2.77, -0.001]} />
        <DotTerminus position={[4.74, -3.452, -0.001]} />
        <DotWithArrow position={[4.74, -1.353, -0.001]} />
        <ImBasedInParis position={[4.148, -0.1, 0]} />
        <Ligne4 position={[4.39, -2.77, 0]} />
        <Ligne12 position={[3.36, 0.07, 0]} />
        <Ligne12Line position={[4.74, -1.02, 0]} />
        <Ligne12SmallBlock position={[4.74, -0.88, 0]} />
        <MetroArrow position={[0.771, 0.07, 0]} />
        <MMetroLarge position={[2.15, 0.07, 0]} />
        <MMetroSmall position={[4.148, -2.77, 0]} />
        <Paris position={[9.09, -1.29, 0]} />
        <StationAbbesses position={[5.182, -1.801, 0]} />
        <StationJulesJoffrin position={[5.182, -2.505, 0]} />
        <StationLamarckColaincourt position={[5.202, -2.152, 0]} />
        <StationMarcadetPoissonniers position={[5.201, -2.854, 0]} />
        <StationMarxDormoy position={[5.201, -3.205, 0]} />
        <StationPigalle position={[5.2, -1.51, 0]} />
        <StationPorteDeLaChapelle position={[5.202, -3.556, 0]} />
      </group>
    </group>
  )
}
