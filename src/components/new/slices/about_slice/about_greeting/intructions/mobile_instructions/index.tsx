import React from 'react'
import { LuRotate3D } from 'react-icons/lu'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function MobileInstructions() {
  const t = useTranslations('ABOUT')

  return (
    <>
      <p>
        {t('INSTRUCTIONS.ROTATE')}{' '}
        <LuRotate3D
          id='rotate_3D_icon'
          size={35}
        />{' '}
        {t('INSTRUCTIONS.YOUR_PHONE')} {t('INSTRUCTIONS.TO_DIRECT_THE_CAMERA')}
      </p>
      <p id='displacement_mobile_instructions'>
        {t('INSTRUCTIONS.DISPLACEMENT_IS_COMING_SOON')}! :&#41;
      </p>
    </>
  )
}
