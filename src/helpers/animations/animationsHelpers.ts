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
        if (!Array.isArray(propertyValue)) {
          propertyValues = new THREE.Vector3()
          for (const [key, value] of Object.entries(propertyValue)) {
            propertyValues[key as keyof TCoordinates] = value as number
          }
          defaultValues = {
            ...defaultValues,
            [property]: propertyValues as THREE.Vector3,
          }
        } else {
          propertyValues = []
          propertyValue.forEach((position) => {
            const positionValues = new THREE.Vector3()
            for (const [key, value] of Object.entries(position)) {
              positionValues[key as keyof TCoordinates] = value as number
            }
            ;(propertyValues as THREE.Vector3[]).push(positionValues)
          })
          defaultValues = {
            ...defaultValues,
            [property]: propertyValues as THREE.Vector3[],
          }
        }
        // pushPropertyDefaultValues(defaultValues, property, propertyValues)
      } else if (property === 'rotation') {
        if (!Array.isArray(propertyValue)) {
          propertyValues = new THREE.Euler()
          for (const [key, value] of Object.entries(propertyValue)) {
            propertyValues[key as keyof TCoordinates] = THREE.MathUtils.degToRad(value as number)
          }
          defaultValues = {
            ...defaultValues,
            [property]: propertyValues as THREE.Euler,
          }
        } else {
          propertyValues = []
          propertyValue.forEach((rotation) => {
            const rotationValues = new THREE.Euler()
            for (const [key, value] of Object.entries(rotation)) {
              rotationValues[key as keyof TCoordinates] = value as number
            }
            ;(propertyValues as THREE.Euler[]).push(rotationValues)
          })
          defaultValues = {
            ...defaultValues,
            [property]: propertyValues as THREE.Euler[],
          }
        }
        // pushPropertyDefaultValues(defaultValues, property, propertyValues)
      } else if (property === 'scale') {
        if (!Array.isArray(propertyValue)) {
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
              [property]: propertyValues as THREE.Vector3,
            }
          }
        } else {
          propertyValues = []
          propertyValue.forEach((scale) => {
            const scaleValues = new THREE.Vector3()
            for (const [key, value] of Object.entries(scale)) {
              scaleValues[key as keyof TCoordinates] = value as number
            }
            ;(propertyValues as THREE.Vector3[]).push(scaleValues)
          })
          defaultValues = {
            ...defaultValues,
            [property]: propertyValues as THREE.Vector3[],
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
  // console.log(`${constants.defaultValues.name} constants`, constants)

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
        let valuesData: Record<string, string | number | boolean | TCoordinates[]> = {}
        if (property === 'position') {
          if (!Array.isArray(value)) {
            valuesData[key] = `+=${value}` // TODO: Issue with negative numbers (check if it can be a string in constants OR typeof)
          } else {
            const values: TCoordinates[] = []
            value.forEach((position: TCoordinates) => {
              let positionData: Record<string, string | number> = {}
              for (const [key, value] of Object.entries(position)) {
                positionData[key] = `+=${value}`
              }
              values.push(positionData)
            })
            valuesData[key] = values
          }
        } else if (property === 'rotation') {
          if (!Array.isArray(value)) {
            valuesData[key] = THREE.MathUtils.degToRad(value as unknown as number)
          } else {
            const values: TCoordinates[] = []
            value.forEach((rotation: TCoordinates) => {
              let rotationData: Record<string, string | number> = {}
              for (const [key, value] of Object.entries(rotation)) {
                rotationData[key] = THREE.MathUtils.degToRad(value as unknown as number)
              }
              values.push(rotationData)
            })
            valuesData[key] = values
          }
        } else if (property === 'scale') {
          if (!Array.isArray(value)) {
            valuesData[key] = value
          } else {
            const values: TCoordinates[] = []
            value.forEach((position: TCoordinates) => {
              let positionData: Record<string, string | number> = {}
              for (const [key, value] of Object.entries(position)) {
                positionData[key] = value
              }
              values.push(positionData)
            })
            valuesData[key] = values
          }
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

  // console.log(`${constants.defaultValues.name} animationsData`, animationsData)
  return animationsData
}

// GET KEYFRAME POSITION

function getKeyframePosition(duration: number, step: number): string {
  return `${((100 / duration) * step).toFixed(2)}%`
}
