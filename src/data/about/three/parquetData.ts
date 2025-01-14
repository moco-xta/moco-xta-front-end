import { default as parquetConstants } from '@/constants/laboratory/three/parquetConstants.json'

export const parquetDefaultValues = {
  material: {
    roughness: parquetConstants.defaultValues.material.roughness,
  },
  texture: {
    repeat: parquetConstants.defaultValues.texture.repeat,
    correctionGreyRange: parquetConstants.defaultValues.texture.correctionGreyRange,
  },
}
