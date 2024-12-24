import * as THREE from 'three'

import type { TGroup, TMesh } from '@/types/animation/three/componentsTypes'
import type { TAnimationsData, TConstantsData } from '@/types/animation/dataTypes'

// GET DEFAULT VALUES

export function getDefaultValues<T extends TGroup | TMesh>(constants: TConstantsData<T>) {
  let defaultValues = {}
  for (const [property, values] of Object.entries(constants.defaultValues)) {
    let propertyData: Record<string, any> = {}
    for (const [key, value] of Object.entries(values)) {
      propertyData[key] = !(property == 'rotation')
        ? value
        : THREE.MathUtils.degToRad(value as number)
    }
    defaultValues = {
      ...defaultValues,
      [property]: propertyData,
    }
  }
  return defaultValues
}

// GET ANIMATIONS DATA

export function getAnimationsData<T extends TGroup | TMesh>(
  duration: number,
  constants: TConstantsData<T>,
): TAnimationsData<T> {
  let animationsData: TAnimationsData<T> = {}
  let propertyData = {}

  for (const [property, keyframes] of Object.entries(constants.animations!) as [
    keyof T,
    Record<string, string | Record<string, string | number | boolean>>,
  ][]) {
    let valuesData: Record<string, string | number | boolean> = {}
    // DEFAULT VALUES
    for (const [key, value] of Object.entries(
      constants.defaultValues[property] as Record<string, string | number | boolean>,
    )) {
      valuesData[key] =
        property === 'position'
          ? `+=${value}` // TODO: Issue with negative numbers (check if it can be a string in constants OR typeof)
          : !(property == 'rotation' && key !== 'ease')
            ? value
            : THREE.MathUtils.degToRad(value as number)
      propertyData = {
        ...propertyData,
        '0%': { ...valuesData },
      }
    }
    // ANIMATIONS
    for (const [key, values] of Object.entries(keyframes)) {
      let valuesData: Record<string, any> = {}
      if (key !== 'easeEach') {
        for (const [key, value] of Object.entries(values)) {
          valuesData[key] = !(property == 'rotation' && key !== 'ease')
            ? value
            : THREE.MathUtils.degToRad(value as number)
        }
        propertyData = {
          ...propertyData,
          [`${getKeyframePosition(duration, Number(key.split('_')[1]))}`]: { ...valuesData },
        }
      }
      propertyData = {
        ...propertyData,
        eachEase: values,
      }
    }
    animationsData = {
      ...animationsData,
      [property]: { keyframes: propertyData },
    }
    console.log('animationsData', animationsData)
  }
  return animationsData
}

// GET KEYFRAME POSITION

function getKeyframePosition(duration: number, step: number): string {
  return `${((100 / duration) * step).toFixed(2)}%`
}
