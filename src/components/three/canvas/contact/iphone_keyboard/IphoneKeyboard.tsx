import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { GroupProps, useLoader } from '@react-three/fiber'

import type { TRandomRangePosition } from '@/types/data/components/three/types'

import IphoneKeyboardTouch from './IphoneKeyboardTouch'

import { getRandomPosition, getRandomRotation } from '@/helpers/threeHelpers'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

const POSITION_RANDOM_RANGE: TRandomRangePosition = {
  min: {
    x: 2,
    y: 2,
    z: 2,
  },
  max: {
    x: 15,
    y: 15,
    z: 15,
  },
  decimal: 0.25,
}

export const IphoneKeyboard = forwardRef<THREE.Group, GroupProps>(
  function IphoneKeyboard(props, ref) {
    const maps = useLoader(
      THREE.TextureLoader,
      texturesConstants.CONTACT.IPHONE_KEYBOARD.map((texture) => texture),
    )

    return (
      <group
        ref={ref}
        {...props}
      >
        {maps.map((map, index) => (
          <IphoneKeyboardTouch
            key={`iphone_keyboard_touch_${index}`}
            position={getRandomPosition(POSITION_RANDOM_RANGE)}
            rotation={getRandomRotation({ z: true })}
            scale={2}
            map={map}
          >
            <meshStandardMaterial
              attach={'material'}
              map={map}
              transparent
              opacity={0}
              side={THREE.DoubleSide}
            />
          </IphoneKeyboardTouch>
        ))}
      </group>
    )
  },
)
