import type {
  TAnimationsData,
  TConstants,
  TCustomsAnimations,
  TDefaultValuesData,
  TPropertiesTypes,
} from '@/types/animation/html/types'
import { TKeyframeKey } from '@/types/animation/timeline/types'

// GET DEFAULT VALUES

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
  return getNestedValues(constants.defaultValues) as TDefaultValuesData
}

// GET ANIMATIONS DATA

export function getAnimationsData(
  constants: TConstants,
  customs?: TCustomsAnimations,
): TAnimationsData {
  let animationsData: TAnimationsData = {}

  for (const [property, { keyframes }] of Object.entries(constants.animations!)) {
    let propertyData = {
      keyframes: {},
    }

    for (const [key, value] of Object.entries(keyframes)) {
      let keyframeData = {}
      if (key !== 'easeEach') {
        for (const [subKey, subValue] of Object.entries(value)) {
          keyframeData = {
            ...keyframeData,
            [subKey]: subValue,
          }
        }
        if (
          customs &&
          Object.prototype.hasOwnProperty.call(customs[property as TPropertiesTypes], key)
        ) {
          for (const [customKey, customValue] of Object.entries(
            customs[property as TPropertiesTypes][key as TKeyframeKey],
          )) {
            keyframeData = {
              ...keyframeData,
              [customKey]: customValue,
            }
          }
        }
        propertyData.keyframes = {
          ...propertyData.keyframes,
          [`${getKeyframePosition(constants.steps!, key)}`]: keyframeData,
        }
      } else {
        propertyData.keyframes = {
          ...propertyData.keyframes,
          easeEach: value,
        }
      }

      animationsData = {
        ...animationsData,
        [property]: propertyData,
      }
    }
  }
  console.log(`${constants.defaultValues.id} animationsData`, animationsData)
  return animationsData
}

// GET KEYFRAME POSITION

export function getKeyframePosition(steps: number, step: string): string {
  return `${((100 / steps) * Number(step.split('_')[1])).toFixed(2)}%`
}
