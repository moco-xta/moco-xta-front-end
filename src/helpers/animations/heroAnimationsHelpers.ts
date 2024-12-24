import * as THREE from 'three'
import { gsap } from 'gsap'

import type { TGroup } from '@/types/animation/three/componentsTypes'
import type { MutableRefObject } from 'react'
import { TDimensionsData } from '@/types/animation/three/dataTypes'

import { greetingTextsGroupDefaultValues } from '@/data/home/hero/three/greeting/texts/greetingTextsGroupData'

// SET GREETING TEXTS POSITIONS

export function setGreetingTextsPositions(greetingTextsGroupRef: MutableRefObject<TGroup>) {
  const MARGIN = 0.75

  const texts: TGroup[] = gsap.utils.toArray(greetingTextsGroupRef.current.children)

  const greetingTextsBoundingBoxes: THREE.Box3[] = []
  texts.forEach((child) => {
    const boundingBox = new THREE.Box3()
    boundingBox.setFromObject(child)
    greetingTextsBoundingBoxes.push(boundingBox)
  })

  const greetingTextsDimensions: TDimensionsData[] = []
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

  texts[0].scale.set(scaleLineUp, scaleLineUp, greetingTextsGroupDefaultValues.dimensions!.depth!)

  const hiTextBoundingBox = new THREE.Box3()
  hiTextBoundingBox.setFromObject(texts[0])
  texts[1].position.x = hiTextBoundingBox.min.x + hiTextBoundingBox.max.x + MARGIN
  texts[1].scale.set(scaleLineUp, scaleLineUp, greetingTextsGroupDefaultValues.dimensions!.depth!)

  const scaleLineDown =
    greetingTextsGroupDefaultValues.dimensions!.width! / greetingTextsDimensions[2].width!
  texts[2].position.set(0, -5, 0)
  texts[2].scale.set(
    scaleLineDown,
    scaleLineDown,
    greetingTextsGroupDefaultValues.dimensions!.depth!,
  )

  const newTexts: TGroup[] = gsap.utils.toArray(greetingTextsGroupRef.current.children)

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
    -greetingTextsGroupDefaultValues.dimensions!.width! / 2,
    greetingTextsGroupBoundingBox.min.y + greetingTextsGroupBoundingBox.max.y,
    0,
  )
}
