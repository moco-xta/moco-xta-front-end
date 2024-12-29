import type { MutableRefObject } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import type { TDimensions } from '@/types/animation/three/types'

import { greetingTextsGroupDefaultValues } from '@/data/home/hero/three/greeting/texts/greetingTextsGroupData'

// SET GREETING TEXTS POSITIONS

export function setGreetingTextsPositions(greetingTextsGroupRef: MutableRefObject<THREE.Group>) {
  const MARGIN = 0.75

  const texts: THREE.Group[] = gsap.utils.toArray(greetingTextsGroupRef.current.children)

  const greetingTextsBoundingBoxes: THREE.Box3[] = []
  texts.forEach((child) => {
    const boundingBox = new THREE.Box3()
    boundingBox.setFromObject(child)
    greetingTextsBoundingBoxes.push(boundingBox)
  })

  const greetingTextsDimensions: TDimensions[] = []
  greetingTextsBoundingBoxes.forEach((boundingBox) => {
    greetingTextsDimensions.push({
      width: boundingBox.max.x - boundingBox.min.x,
      height: boundingBox.max.y - boundingBox.min.y,
      depth: boundingBox.max.z - boundingBox.min.z,
    })
  })

  const textSpaceUp: number = greetingTextsGroupDefaultValues.dimensions!.width! - MARGIN

  const scaleLineUp =
    textSpaceUp / (greetingTextsDimensions[0].width! + greetingTextsDimensions[1].width!)

  texts[0].matrixWorldNeedsUpdate = true
  texts[0].scale.set(scaleLineUp, scaleLineUp, greetingTextsGroupDefaultValues.dimensions!.depth!)
  texts[0].updateMatrix()

  texts[1].matrixWorldNeedsUpdate = true
  const hiTextBoundingBox = new THREE.Box3()
  hiTextBoundingBox.setFromObject(texts[0])
  texts[1].position.x = hiTextBoundingBox.min.x + hiTextBoundingBox.max.x + MARGIN
  texts[1].scale.set(scaleLineUp, scaleLineUp, greetingTextsGroupDefaultValues.dimensions!.depth!)
  texts[1].updateMatrix()

  texts[2].matrixWorldNeedsUpdate = true
  const scaleLineDown =
    greetingTextsGroupDefaultValues.dimensions!.width! / greetingTextsDimensions[2].width!
  texts[2].position.set(0, -5, 0)
  texts[2].scale.set(
    scaleLineDown,
    scaleLineDown,
    greetingTextsGroupDefaultValues.dimensions!.depth!,
  )
  texts[2].updateMatrix()

  const newTexts: THREE.Group[] = gsap.utils.toArray(greetingTextsGroupRef.current.children)

  const newGreetingTextsBoundingBoxes: THREE.Box3[] = []
  newTexts.forEach((child) => {
    const boundingBox = new THREE.Box3()
    boundingBox.setFromObject(child)
    newGreetingTextsBoundingBoxes.push(boundingBox)
  })

  newTexts[2].position.y = -(
    newGreetingTextsBoundingBoxes[2].max.y -
    newGreetingTextsBoundingBoxes[2].min.y +
    MARGIN
  )

  const greetingTextsGroupBoundingBox = new THREE.Box3()
  greetingTextsGroupBoundingBox.setFromObject(greetingTextsGroupRef.current)
  greetingTextsGroupRef.current.position.set(
    -greetingTextsGroupDefaultValues.dimensions!.width! / 2 +
      greetingTextsGroupDefaultValues?.position!.x,
    greetingTextsGroupBoundingBox.min.y +
      greetingTextsGroupBoundingBox.max.y -
      MARGIN / 2 +
      greetingTextsGroupDefaultValues?.position!.y,
    0 + greetingTextsGroupDefaultValues?.position!.z,
  )
}
