import React, { forwardRef, useRef } from 'react'
import * as THREE from 'three'
import { GroupProps, useLoader } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import IphoneKeyboardTouch from './IphoneKeyboardTouch'

import {
  RandomRangePositionInterface,
  setRandomPosition,
  setRandomRotation,
} from '@/helpers/threeHelpers'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

const POSITION_RANDOM_RANGE: RandomRangePositionInterface = {
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
      texturesConstants.HOME.IPHONE_KEYBOARD.map((texture) => texture),
    )

    useGSAP(() => {})

    return (
      <group ref={ref}>
        {maps.map((map, index) => (
          <IphoneKeyboardTouch
            key={`iphone_keyboard_touch_${index}`}
            position={setRandomPosition(POSITION_RANDOM_RANGE)}
            rotation={setRandomRotation({ z: true })}
            scale={2}
            map={map}
          >
            <meshStandardMaterial
              attach={'material'}
              map={map}
              transparent
              opacity={0}
            />
          </IphoneKeyboardTouch>
        ))}
      </group>
    )
  },
)
