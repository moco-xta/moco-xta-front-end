import { TAmbientLightData } from '@/types/three/lightsTypes'

import { default as ambientLightConstants } from '@/constants/home/hero/three/lights/ambientLightConstants.json'

export const ambientLightData: TAmbientLightData = {
  defaultValues: {
    color: ambientLightConstants.defaultValues.color,
    intensity: ambientLightConstants.defaultValues.intensity,
  },
}
