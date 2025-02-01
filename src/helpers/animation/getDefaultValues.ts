import * as THREE from 'three'

import type { TCoordinatesData } from '@/types/data/components/three/types'
import type {
  TConstants,
  TElementDefaultValues,
  TProperties,
  TParameterValueTypes,
  TProcessedValueTypes,
} from '@/types/data/animation/three/types'

export function getDefaultValues(constants: TConstants): TElementDefaultValues {
  const defaultValues: TElementDefaultValues = {
    name: constants.defaultValues.name,
    visible: constants.defaultValues.visible,
  }

  for (const [property, propertyValue] of Object.entries(constants.defaultValues)) {
    if (
      typeof propertyValue === 'string' ||
      typeof propertyValue === 'number' ||
      typeof propertyValue === 'boolean'
    ) {
      ;(defaultValues as unknown as Record<TProperties, TParameterValueTypes>)[
        property as TProperties
      ] = propertyValue
      continue
    }

    let processedValue: TProcessedValueTypes

    if (property === 'position' || property === 'scale') {
      processedValue = new THREE.Vector3()
      Object.entries(propertyValue).forEach(([key, value]) => {
        ;(processedValue as THREE.Vector3)[key as keyof TCoordinatesData] = value as number
      })
    } else if (property === 'rotation') {
      processedValue = new THREE.Euler()
      Object.entries(propertyValue).forEach(([key, value]) => {
        ;(processedValue as THREE.Euler)[key as keyof TCoordinatesData] = THREE.MathUtils.degToRad(
          value as number,
        )
      })
    } else {
      processedValue = { ...(propertyValue as Record<string, TParameterValueTypes>) }
    }

    ;(defaultValues as unknown as Record<TProperties, TParameterValueTypes | TProcessedValueTypes>)[
      property as TProperties
    ] = processedValue
  }

  return defaultValues
}

// GET DEFAULT VALUES

/* export function getDefaultValues(constants: TConstants): TElementDefaultValues {
  let defaultValues = {} as TElementDefaultValues
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
      let propertyValues: TPropertyTypes
      if (property === 'position' || property === 'scale') {
        propertyValues = new THREE.Vector3()
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues[key as keyof TCoordinatesData] = value as number
        }
        defaultValues = {
          ...defaultValues,
          [property]: propertyValues as THREE.Vector3,
        }
      } else if (property === 'rotation') {
        propertyValues = new THREE.Euler()
        for (const [key, value] of Object.entries(propertyValue)) {
          propertyValues[key as keyof TCoordinatesData] = THREE.MathUtils.degToRad(value as number)
        }
        defaultValues = {
          ...defaultValues,
          [property]: propertyValues as THREE.Euler,
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
      }
    }
  }
  return defaultValues
} */