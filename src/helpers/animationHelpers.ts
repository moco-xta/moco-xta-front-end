import * as THREE from 'three'

import type { TAnimationsData, TKeyframesData } from '@/types/data/animation/types'
import type { TCoordinatesData } from '@/types/data/components/three/types'
import type {
  TConstants,
  TElementDefaultValues,
  TProperties,
  TPropertyTypes,
  TParameterValueTypes,
  TProcessedValueTypes,
} from '@/types/data/animation/three/types'

// GET DEFAULT VALUES

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

// GET DEFAULT VALUES ARRAY

export function getDefaultValuesArray(constants: TConstants): TElementDefaultValues[] {
  const defaultValues = [] as TElementDefaultValues[]

  if (Array.isArray(constants.defaultValues.position)) {
    constants.defaultValues.position.forEach((_, index) => {
      let elementDefaultValues = {} as TElementDefaultValues

      for (const [property, propertyValue] of Object.entries(constants.defaultValues)) {
        if (
          typeof propertyValue === 'string' ||
          typeof propertyValue === 'number' ||
          typeof propertyValue === 'boolean'
        ) {
          elementDefaultValues = {
            ...elementDefaultValues,
            [property]: propertyValue,
          }
        } else {
          let propertyValues: TPropertyTypes
          if (property === 'position') {
            propertyValues = new THREE.Vector3()
            if (Array.isArray(constants.defaultValues.position)) {
              for (const [key, value] of Object.entries(
                constants.defaultValues.position[index] as TCoordinatesData,
              )) {
                propertyValues[key as keyof TCoordinatesData] = value as number
              }
              elementDefaultValues = {
                ...elementDefaultValues,
                [property]: propertyValues as THREE.Vector3,
              }
            }
          } else if (property === 'rotation') {
            if (!Array.isArray(propertyValue)) {
              propertyValues = new THREE.Euler()
              for (const [key, value] of Object.entries(propertyValue)) {
                propertyValues[key as keyof TCoordinatesData] = THREE.MathUtils.degToRad(
                  value as number,
                )
              }
              elementDefaultValues = {
                ...elementDefaultValues,
                [property]: propertyValues as THREE.Euler,
              }
            } else {
              propertyValues = new THREE.Euler()
              if (Array.isArray(constants.defaultValues.rotation)) {
                for (const [key, value] of Object.entries(
                  constants.defaultValues.rotation[index] as TCoordinatesData,
                )) {
                  propertyValues[key as keyof TCoordinatesData] = THREE.MathUtils.degToRad(
                    value,
                  ) as number
                }
                elementDefaultValues = {
                  ...elementDefaultValues,
                  [property]: propertyValues as THREE.Euler,
                }
              }
            }
          } else if (property === 'scale') {
            if (!Array.isArray(propertyValue)) {
              propertyValues = new THREE.Vector3()
              for (const [key, value] of Object.entries(propertyValue)) {
                propertyValues[key as keyof TCoordinatesData] = value as number
              }
              elementDefaultValues = {
                ...elementDefaultValues,
                [property]: propertyValues as THREE.Vector3,
              }
            } else {
              propertyValues = new THREE.Vector3()
              if (Array.isArray(constants.defaultValues.scale)) {
                for (const [key, value] of Object.entries(
                  constants.defaultValues.scale[index] as TCoordinatesData,
                )) {
                  propertyValues[key as keyof TCoordinatesData] = value as number
                }
                elementDefaultValues = {
                  ...elementDefaultValues,
                  [property]: propertyValues as THREE.Vector3,
                }
              }
            }
          } else {
            propertyValues = {}
            for (const [key, value] of Object.entries(propertyValue)) {
              propertyValues = { ...propertyValues, [key]: value }
            }
            elementDefaultValues = {
              ...elementDefaultValues,
              [property]: propertyValues,
            }
          }
        }
      }
      defaultValues.push(elementDefaultValues)
    })
  }
  return defaultValues
}

/* export function getAnimationsData(duration: number, constants: TConstants): TAnimationsData {
  const animationsData: TAnimationsData = {};

  for (const [property, keyframes] of Object.entries(constants.animations || {})) {
    const propertyData: Record<string, Record<string, unknown>> = {};

    // Process default values
    if (constants.defaultValues.hasOwnProperty(property)) {
      const defaultValues = constants.defaultValues[property as TProperties] as Record<string, string | number | boolean>;
      for (const [key, value] of Object.entries(defaultValues)) {
        const processedValue = processPropertyValue(property, key, value);
        propertyData['0%'] = { ...(propertyData['0%'] || {}), [key]: processedValue };
      }
    }

    // Process keyframes
    for (const [key, values] of Object.entries(keyframes.keyframes)) {
      if (key !== 'easeEach') {
        const processedValues: Record<string, unknown> = {};
        for (const [subKey, value] of Object.entries(values)) {
          processedValues[subKey] = processPropertyValue(property, subKey, value);
        }
        const keyframePosition = getKeyframePosition(duration, key);
        propertyData[keyframePosition] = processedValues;
      } else {
        propertyData.easeEach = values;
      }
    }

    animationsData[property as TProperties] = { keyframes: propertyData };
  }

  return animationsData;
}

function processPropertyValue(property: string, key: string, value: unknown): unknown {
  if (property === 'rotation' && key !== 'ease') {
    return THREE.MathUtils.degToRad(value as number);
  }
  return value;
}

export function getKeyframePosition(duration: number, step: string): string {
  const stepNumber = Number(step.split('_')[1]);
  const percentage = ((100 / duration) * stepNumber).toFixed(2);
  return `${percentage}%`;
} */

// GET ANIMATIONS DATA

export function getAnimationsData(duration: number, constants: TConstants): TAnimationsData {
  let animationsData: TAnimationsData = {}
  let propertyData = {}

  for (const [property, keyframes] of Object.entries(constants.animations!) as [
    TProperties,
    TKeyframesData,
  ][]) {
    // DEFAULT VALUES
    if (constants.defaultValues.hasOwnProperty(property)) {
      for (const [key, value] of Object.entries(
        constants.defaultValues[property] as Record<string, string | number | boolean>,
      )) {
        const valuesData: Record<string, string | number | boolean | TCoordinatesData[]> = {}
        if (property === 'position') {
          valuesData[key] = value
        } else if (property === 'rotation') {
          valuesData[key] = THREE.MathUtils.degToRad(value as unknown as number)
        } else if (property === 'scale') {
          valuesData[key] = value
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
      const valuesData: Record<string, string | number | boolean> = {}
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
          [`${getKeyframePosition(duration, key)}`]: { ...valuesData },
        }
      } else {
        propertyData = {
          ...propertyData,
          easeEach: values,
        }
      }
    }
    animationsData = {
      ...animationsData,
      [property]: { keyframes: propertyData },
    }
  }
  return animationsData
}

// GET KEYFRAME POSITION

export function getKeyframePosition(duration: number, step: string): string {
  return `${((100 / duration) * Number(step.split('_')[1])).toFixed(2)}%`
}

// SET POSITION

export function setPosition(coordinates: TCoordinatesData): THREE.Vector3 {
  return new THREE.Vector3(coordinates.x ?? 0, coordinates.y ?? 0, coordinates.z ?? 0)
}

// SET ROTATION

export function setRotation(coordinates: TCoordinatesData): THREE.Euler {
  return new THREE.Euler(
    THREE.MathUtils.degToRad(coordinates.x ?? 0),
    THREE.MathUtils.degToRad(coordinates.y ?? 0),
    THREE.MathUtils.degToRad(coordinates.z ?? 0),
  )
}

// SET SCALE

export function setScale(coordinates: TCoordinatesData): THREE.Vector3 {
  return new THREE.Vector3(coordinates.x ?? 0, coordinates.y ?? 0, coordinates.z ?? 0)
}
