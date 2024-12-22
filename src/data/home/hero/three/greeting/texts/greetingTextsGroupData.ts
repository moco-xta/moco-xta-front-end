import * as THREE from 'three'

import type { TGroup } from '@/types/animation/three/componentsTypes'
import type { TAnimatedComponentData, TDefaultValues } from '@/types/animation/dataTypes'

import { default as greetingTextsGroupConstants } from '@/constants/home/hero/three/greeting/texts/greetingTextsGroupConstants.json'

export const greetingTextsGroupDefaultValues: TDefaultValues<TGroup> = {
  position: new THREE.Vector3(
    greetingTextsGroupConstants.defualtValues.position.x,
    greetingTextsGroupConstants.defualtValues.position.y,
    greetingTextsGroupConstants.defualtValues.position.z,
  ),
  rotation: new THREE.Euler(
    THREE.MathUtils.degToRad(greetingTextsGroupConstants.defualtValues.rotation.x),
    THREE.MathUtils.degToRad(greetingTextsGroupConstants.defualtValues.rotation.x),
    THREE.MathUtils.degToRad(greetingTextsGroupConstants.defualtValues.rotation.x),
  ),
}

export const greetingTextsGroupData: TAnimatedComponentData<TGroup> = {
  label: greetingTextsGroupConstants.label,
  duration: greetingTextsGroupConstants.duration,
  animations: {
    position: {
      keyframes: {
        '0%': {
          x: greetingTextsGroupConstants.defualtValues.position.x,
          y: greetingTextsGroupConstants.defualtValues.position.y,
          z: greetingTextsGroupConstants.defualtValues.position.z,
        },
        '20%': {
          x: greetingTextsGroupConstants.animations.position['20%'].x,
          y: greetingTextsGroupConstants.animations.position['20%'].y,
          ease: greetingTextsGroupConstants.animations.position['20%'].ease,
        },
        '40%': {
          x: greetingTextsGroupConstants.animations.position['40%'].x,
          y: greetingTextsGroupConstants.animations.position['40%'].y,
          z: greetingTextsGroupConstants.animations.position['40%'].z,
          ease: greetingTextsGroupConstants.animations.position['40%'].ease,
        },
        '60%': {
          x: greetingTextsGroupConstants.animations.position['60%'].x,
          y: greetingTextsGroupConstants.animations.position['60%'].y,
          z: greetingTextsGroupConstants.animations.position['60%'].z,
          ease: greetingTextsGroupConstants.animations.position['60%'].ease,
        },
        '80%': {
          y: greetingTextsGroupConstants.animations.position['80%'].y,
          z: greetingTextsGroupConstants.animations.position['80%'].z,
          ease: greetingTextsGroupConstants.animations.position['80%'].ease,
        },
        '100%': {
          z: greetingTextsGroupConstants.animations.position['100%'].z,
          ease: greetingTextsGroupConstants.animations.position['100%'].ease,
        },
        easeEach: greetingTextsGroupConstants.animations.position.eachEase,
      },
    },
    rotation: {
      keyframes: {
        '0%': {
          x: THREE.MathUtils.degToRad(greetingTextsGroupConstants.defualtValues.rotation.x),
          y: THREE.MathUtils.degToRad(greetingTextsGroupConstants.defualtValues.rotation.y),
          z: THREE.MathUtils.degToRad(greetingTextsGroupConstants.defualtValues.rotation.z),
        },
        '20%': {
          x: THREE.MathUtils.degToRad(greetingTextsGroupConstants.animations.rotation['20%'].x),
          y: THREE.MathUtils.degToRad(greetingTextsGroupConstants.animations.rotation['20%'].y),
          ease: greetingTextsGroupConstants.animations.rotation['20%'].ease,
        },
        '40%': {
          x: THREE.MathUtils.degToRad(greetingTextsGroupConstants.animations.rotation['40%'].x),
          y: THREE.MathUtils.degToRad(greetingTextsGroupConstants.animations.rotation['40%'].y),
          ease: greetingTextsGroupConstants.animations.rotation['40%'].ease,
        },
        '60%': {
          x: THREE.MathUtils.degToRad(greetingTextsGroupConstants.animations.rotation['60%'].x),
          y: THREE.MathUtils.degToRad(greetingTextsGroupConstants.animations.rotation['60%'].y),
          ease: greetingTextsGroupConstants.animations.rotation['60%'].ease,
        },
        '80%': {
          x: THREE.MathUtils.degToRad(greetingTextsGroupConstants.animations.rotation['80%'].x),
          ease: greetingTextsGroupConstants.animations.rotation['80%'].ease,
        },
        '100%': {
          x: THREE.MathUtils.degToRad(greetingTextsGroupConstants.animations.rotation['100%'].x),
          ease: greetingTextsGroupConstants.animations.rotation['100%'].ease,
        },
        easeEach: greetingTextsGroupConstants.animations.rotation.eachEase,
      },
    },
  },
}
