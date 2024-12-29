import type { TAnimationsData, TConstants, TDefaultValuesData } from '@/types/animation/html/types'

// GET DEFAULT VALUES

// TODO: Make function recursive

function getNestedValues(object: any) {
  let defaultValues = {} as TDefaultValuesData
  for (const [key, value] of Object.entries(object)) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      defaultValues = {
        ...defaultValues,
        [key]: value,
      }
    } else {
      defaultValues = {
        ...defaultValues,
        [key]: getNestedValues(value),
      }
    }
  }
  return defaultValues
}

export function getDefaultValues(constants: TConstants): TDefaultValuesData {
  return getNestedValues(constants.defaultValues)
}

// GET ANIMATIONS DATA

export function getAnimationsData(constants: TConstants): TAnimationsData {
  let animationsData: TAnimationsData = {}

  for (const [property, keyframes] of Object.entries(constants.animations!)) {
    let propertyData = {
      keyframes: {},
    }

    for (const [key, value] of Object.entries(keyframes.keyframes)) {
      if (key !== 'easeEach') {
        let keyframeData = {}
        for (const [subKey, subValue] of Object.entries(value)) {
          keyframeData = {
            ...keyframeData,
            [subKey]: subValue,
          }
        }
        keyframeData = {
          ...keyframeData,
          onComplete: () => console.log('test'),
        }
        propertyData = {
          ...propertyData,
          [`${getKeyframePosition(constants.steps!, key)}`]: keyframeData,
        }
      } else {
        propertyData.keyframes = {
          ...propertyData.keyframes,
          eachEase: value,
        }
      }
    }

    animationsData = {
      ...animationsData,
      [property]: { keyframes: propertyData },
    }
  }
  // console.log(`${constants.defaultValues.id} animationsData`, animationsData)
  return animationsData
}

// GET KEYFRAME POSITION

export function getKeyframePosition(steps: number, step: string): string {
  return `${((100 / steps) * Number(step.split('_')[1])).toFixed(2)}%`
}
