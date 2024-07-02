import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setTexture } from '@/redux/slice/minecraftSlice'

import { useAboutKeyboard } from '@/hooks/new/useAboutKeyboard'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

import './index.scss'

const images = {
  dirt: texturesConstants.MINECRAFT.DIRT,
  grass: texturesConstants.MINECRAFT.GRASS,
  glass: texturesConstants.MINECRAFT.GLASS,
  wood: texturesConstants.MINECRAFT.WOOD,
  log: texturesConstants.MINECRAFT.LOG,
}

export const TextureSelector = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { texture } = useSelector((state: RootState) => state.minecraft)

  const { dirt, grass, glass, wood, log } = useAboutKeyboard()

  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log,
    }
    const pressedTexture = Object.entries(textures).find(([k, v]) => v)
    if (pressedTexture) {
      dispatch(setTexture(pressedTexture[0]))
    }
  }, [dirt, grass, glass, wood, log, dispatch])

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 2000)
    setVisible(true)
    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [texture])

  return (
    visible && (
      <div
        id='texture_selector'
        className='texture-selector'
      >
        {Object.entries(images).map(([k, src]) => {
          return (
            <img
              key={k}
              src={src}
              alt={k}
              className={`${k === texture ? 'active' : ''} texture`}
            />
          )
        })}
      </div>
    )
  )
}
