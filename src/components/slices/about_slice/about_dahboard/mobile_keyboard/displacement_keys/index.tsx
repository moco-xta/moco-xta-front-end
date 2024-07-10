import React from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'

import './index.scss'
import KeysWithIcons from '@/components/shared/keyboard_keys/KeysWithIcons'

export default function DisplacementKeys() {
  const handleArrowUp = () => {}

  return (
    <div id='displacement_keys'>
      <KeysWithIcons
        Icon={FaArrowUp}
        code={'ArrowUp'}
      />
      <div id='left_down_right_keys'>
        <KeysWithIcons
          Icon={FaArrowLeft}
          code={'ArrowLeft'}
        />
        <KeysWithIcons
          Icon={FaArrowDown}
          code={'ArrowDown'}
        />
        <KeysWithIcons
          Icon={FaArrowRight}
          code={'ArrowRight'}
        />
      </div>
    </div>
  )
}
