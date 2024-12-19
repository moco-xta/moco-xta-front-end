import * as THREE from 'three'

import { TMesh } from '@/types/animation/componentTypes'

import { TAnimatedComponentData } from '@/types/animation/dataTypes'

import { default as hiTextConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/hiTextConstants.json'

export function hiTextData(index: number, textLengthRef: number[]): TAnimatedComponentData<TMesh> {
  return {
    label: `${hiTextConstants.label}+=${index! * hiTextConstants.animations.stagger}`,
    duration: hiTextConstants.duration,
    defaultValues: {
      position: new THREE.Vector3(
        hiTextConstants.defaultValues.position.x,
        hiTextConstants.defaultValues.position.y,
        hiTextConstants.defaultValues.position.z,
      ),
      material: {
        opacity: hiTextConstants.defaultValues.material.opacity,
      },
    },
    animations: {
      position: {
        keyframes: {
          '0%': {
            x: hiTextConstants.defaultValues.position.x,
            y: hiTextConstants.defaultValues.position.y,
            z: hiTextConstants.defaultValues.position.z,
          },
          '20%': {
            x: textLengthRef.slice(0, index).reduce((a, b) => a + b, 0),
            y: hiTextConstants.animations.position['20%'].y,
            z: hiTextConstants.animations.position['20%'].z,
            ease: hiTextConstants.animations.position['20%'].ease,
          },
          easeEach: hiTextConstants.animations.position.easeEach,
        },
      },
      material: {
        keyframes: {
          '10%': {
            opacity: hiTextConstants.defaultValues.material.opacity,
          },
          '20%': {
            opacity: hiTextConstants.animations.material['20%'].opacity,
            ease: hiTextConstants.animations.material['20%'].ease,
          },
          easeEach: hiTextConstants.animations.material.easeEach,
        },
      },
    },
  }
}
