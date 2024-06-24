import useTextureLoader from '@/hooks/useTextureLoader'

import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

export const dirtTexture = useTextureLoader(texturesConstants.MINECRAFT.DIRT)
export const glassTexture = useTextureLoader(texturesConstants.MINECRAFT.GLASS)
export const grassTexture = useTextureLoader(texturesConstants.MINECRAFT.GRASS)
export const groundTexture = useTextureLoader(texturesConstants.MINECRAFT.GRASS)
export const logTexture = useTextureLoader(texturesConstants.MINECRAFT.LOG)
export const woodTexture = useTextureLoader(texturesConstants.MINECRAFT.WOOD)
