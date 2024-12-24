import * as THREE from 'three'

import type {
  TConstants,
  TCoordinates,
  TDefaultValuesData,
  TDimensions,
  TPropertyValuesTypes,
} from '@/types/animation/dataTypes'

// GET DEFAULT VALUES

/* function setPropertyDefaultValues<T extends TGroup | TMesh>(
  defaultValues: TDefaultValuesData<T>,
  property: string,
  propertyValue: TPropertyValueTypes,
  propertyValues: TPropertyValuesTypes,
) {
  for (const [key, value] of Object.entries(propertyValue)) {
    ;(propertyValues as Record<string, any>)[key] = value
  }
  defaultValues = {
    ...defaultValues,
    [property]: propertyValues,
  }
} */

function pushPropertyDefaultValues(

  defaultValues: TDefaultValuesData,
  property: string,
  propertyValues: TPropertyValuesTypes,
): void {
  defaultValues = {
    ...defaultValues,
    [property]: propertyValues,
  }
}

export function getDefaultValues(constants: TConstants) {
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
      let propertyValues: TPropertyValuesTypes

      if (property === 'position' || property === 'scale') {
        propertyValues = new THREE.Vector3()
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues[key as keyof TCoordinates] = value
        }
        pushPropertyDefaultValues(defaultValues, property, propertyValues)
      } else if (property === 'rotation') {
        propertyValues = new THREE.Euler()
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues[key as keyof TCoordinates] = THREE.MathUtils.degToRad(value)
        }
        pushPropertyDefaultValues(defaultValues, property, propertyValues)
      } else {
        propertyValues = {}
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues = { ...propertyValues, [key]: value }
        }
        pushPropertyDefaultValues(defaultValues, property, propertyValues)
      }
    }
  }





  console.log(`${constants.name} defaultValues`, defaultValues)
  return defaultValues
}

/* export function getDefaultValues(constants: TDefaultValuesConstants) {
  let defaultValues = {} as TDefaultValuesData
  for (const [property, propertyValue] of Object.entries(constants)) {
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
      console.log('IS object')
      let propertyValues: TPropertyValuesTypes

      if (property === 'position' || property === 'scale') {
        propertyValues = new THREE.Vector3()
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues[key as keyof TCoordinates] = value
        }
        addPropertyDefaultValues(defaultValues, property, propertyValues)
      } else if (property === 'rotation') {
        propertyValues = new THREE.Euler()
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues[key as keyof TCoordinates] = THREE.MathUtils.degToRad(value)
        }
        addPropertyDefaultValues(defaultValues, property, propertyValues)
      } else {
        propertyValues = {}
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues = { ...propertyValues, [key]: value }
        }
        addPropertyDefaultValues(defaultValues, property, propertyValues)
      }
    }
  }
  console.log('defaultValues', defaultValues)
  return defaultValues
} */

// GET ANIMATIONS DATA

/* export function getAnimationsData(duration: number, constants: TConstants): TAnimationsData {
  let animationsData: TAnimationsData = {}

  for (const [property, keyframes] of Object.entries(constants.animations!) as [
    TPropertiesTypes,
    Record<string, string | Record<string, string | number | boolean>>,
  ][]) {
  }

  return animationsData
}

export function getAnimationsDataOld<T extends TGroup | TMesh>(
  duration: number,
  constants: TConstants<T>,
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
} */
