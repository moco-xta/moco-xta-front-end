import { TAmbientLightData } from '@/types/components/three/types'

import { default as ambientLightConstants } from '@/constants/hero/three/lightning/ambientLightConstants.json'

export const ambientLightData: TAmbientLightData = {
  defaultValues: {
    color: ambientLightConstants.defaultValues.color,
    intensity: ambientLightConstants.defaultValues.intensity,
  },
}
