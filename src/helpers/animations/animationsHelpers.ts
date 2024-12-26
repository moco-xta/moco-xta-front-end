import * as THREE from 'three'

import type {
  TAnimationsData,
  TConstants,
  TCoordinates,
  TDefaultValuesData,
  TKeyframesData,
  TPropertiesTypes,
  TPropertyValuesDataTypes,
} from '@/types/animation/types'

/* function pushPropertyDefaultValues(
  defaultValues: TDefaultValuesData,
  property: string,
  propertyValues: TPropertyValuesDataTypes,
): void {
  defaultValues = {
    ...defaultValues,
    [property]: propertyValues,
  }
} */

export function getDefaultValues(constants: TConstants): TDefaultValuesData {
  // console.log(`${constants.name} constants`, constants)

  let defaultValues = {} as TDefaultValuesData

  for (const [property, propertyValue] of Object.entries(constants.defaultValues)) {
    if (
      typeof propertyValue === 'string' ||
      typeof propertyValue === 'number' ||
      typeof propertyValue === 'boolean'
    ) {
      defaultValues = {
        ...defaultValues,
        [property]: propertyValue,
      }
    } else {
      let propertyValues: TPropertyValuesDataTypes
      if (property === 'position') {
        propertyValues = new THREE.Vector3()
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues[key as keyof TCoordinates] = value as number
        }
        defaultValues = {
          ...defaultValues,
          [property]: propertyValues,
        }
        // pushPropertyDefaultValues(defaultValues, property, propertyValues)
      } else if (property === 'rotation') {
        propertyValues = new THREE.Euler()
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues[key as keyof TCoordinates] = THREE.MathUtils.degToRad(value as number)
        }
        defaultValues = {
          ...defaultValues,
          [property]: propertyValues,
        }
        // pushPropertyDefaultValues(defaultValues, property, propertyValues)
      } else if (property === 'scale') {
        if (typeof propertyValue === 'number') {
          defaultValues = {
            ...defaultValues,
            [property]: propertyValue,
          }
        } else {
          propertyValues = new THREE.Vector3()
          for (const [key, value] of Object.entries(propertyValue)) {
            propertyValues[key as keyof TCoordinates] = value as number
          }
          defaultValues = {
            ...defaultValues,
            [property]: propertyValues,
          }
        }
        // pushPropertyDefaultValues(defaultValues, property, propertyValues)
      } else {
        propertyValues = {}
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues = { ...propertyValues, [key]: value }
        }
        defaultValues = {
          ...defaultValues,
          [property]: propertyValues,
        }
        // pushPropertyDefaultValues(defaultValues, property, propertyValues)
      }
    }
  }

  console.log(`${constants.defaultValues.name} defaultValues`, defaultValues)
  return defaultValues
}

// GET ANIMATIONS DATA

export function getAnimationsData(duration: number, constants: TConstants): TAnimationsData {
  console.log(`${constants.defaultValues.name} constants`, constants)

  let animationsData: TAnimationsData = {}
  let propertyData = {}

  for (const [property, keyframes] of Object.entries(constants.animations!) as [
    TPropertiesTypes,
    TKeyframesData,
  ][]) {
    // DEFAULT VALUES
    if (constants.defaultValues.hasOwnProperty(property)) {
      for (const [key, value] of Object.entries(
        constants.defaultValues[property] as Record<string, string | number | boolean>,
      )) {
        let valuesData: Record<string, string | number | boolean> = {}
        if (property === 'position') {
          valuesData[key] = `+=${value}` // TODO: Issue with negative numbers (check if it can be a string in constants OR typeof)
        } else if (property === 'rotation') {
          valuesData[key] = THREE.MathUtils.degToRad(value as unknown as number)
        } else {
          valuesData[key] = value as string | number | boolean
        }
        propertyData = {
          ...propertyData,
          '0%': { ...valuesData },
        }
      }
    }
    // ANIMATIONS
    for (const [key, values] of Object.entries(keyframes.keyframes)) {
      let valuesData: Record<string, string | number | boolean> = {}
      if (key !== 'easeEach') {
        for (const [key, value] of Object.entries(values)) {
          if (property == 'rotation' && key !== 'ease') {
            valuesData[key] = THREE.MathUtils.degToRad(value as unknown as number)
          } else {
            valuesData[key] = value as string | number | boolean
          }
        }
        propertyData = {
          ...propertyData,
          [`${getKeyframePosition(duration, Number(key.split('_')[1]))}`]: { ...valuesData },
        }
      } else {
        propertyData = {
          ...propertyData,
          eachEase: values,
        }
      }
    }
    animationsData = {
      ...animationsData,
      [property]: { keyframes: propertyData },
    }
  }

  console.log(`${constants.defaultValues.name} animationsData`, animationsData)
  return animationsData
}

// GET KEYFRAME POSITION

function getKeyframePosition(duration: number, step: number): string {
  return `${((100 / duration) * step).toFixed(2)}%`
}
