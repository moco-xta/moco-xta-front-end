import React from 'react'

import { KeysWithIconsInterface } from '@/interfaces/keyboardKeysInterfaces'

import { useAboutKeyboard } from '@/hooks/useAboutKeyboard'

export default function KeysWithIcons({ Icon, code }: KeysWithIconsInterface) {
  const { handleOnTouchStart, handleOnTouchEnd } = useAboutKeyboard()

  return (
    <Icon
      className='keyboard_key'
      onTouchStart={() => handleOnTouchStart(code)}
      onTouchEnd={() => handleOnTouchEnd(code)}
    />
  )
}
