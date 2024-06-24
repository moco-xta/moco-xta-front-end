import React, { useEffect } from 'react'
import * as THREE from 'three'

import { AboutSceneInterface } from '@/interfaces/new/threeInterfaces'

import LaboratoireClayRenderLights from './LaboratoireClayRenderLights'
import { LaboratoireClayRender } from '../../models/about/LaboratoireClayRender'
import LaboratoireFinalRenderLights from './LaboratoireFinalRenderLights'
import LaboratoireFinalRender from './LaboratoireFinalRender'
import PostProcessing from './PostProcessing'
import Ground from './Ground'
import { useThree } from '@react-three/fiber'

export default function AboutScene({ isClayRender }: AboutSceneInterface) {
  const { raycaster, pointer } = useThree()

  useEffect(() => {
    console.log('raycaster', raycaster)
  }, [raycaster])

  useEffect(() => {
    console.log('pointer', pointer)
  }, [pointer])

  /* const rayCaster = new THREE.Raycaster(controls.getObject().position, cameraDirection); */
  /* var intersects = rayCaster.intersectObject(hitMesh, true);  */

  return (
    <>
      {isClayRender ? (
        <>
          <LaboratoireClayRenderLights />
          <LaboratoireClayRender />
        </>
      ) : (
        <>
          <LaboratoireFinalRenderLights />
          <LaboratoireFinalRender />
          <PostProcessing />
        </>
      )}
      <Ground />
    </>
  )
}
