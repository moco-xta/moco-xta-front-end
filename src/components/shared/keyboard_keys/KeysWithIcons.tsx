import React from 'react'

import { KeysWithIconsInterface } from '@/interfaces/keyboardKeysInterfaces'

import { useAboutKeyboard } from '@/hooks/useAboutKeyboard'

export default function KeysWithIcons({ Icon, code }: KeysWithIconsInterface) {
  const { handleOnClick, /* handleOnTouchStart, */ handleOnTouchEnd } = useAboutKeyboard()

  return (
    <button
      onClick={() => handleOnClick(code)}
      /* onTouchStart={() => handleOnTouchStart(code)} */
      onTouchEnd={() => handleOnTouchEnd(code)}
    >
      <Icon
      /* className='keyboard_key' */
      />
    </button>
  )
}
