import React from 'react'
import { useTranslations } from 'next-intl'

import { default as imgConstants } from '@/constants/new/assets/imgConstants.json'

import './index.scss'

export default function QRCodeToAbout() {
  const t = useTranslations('ABOUT')

  return (
    <div
      id='qr_code_to_about_card'
      className='qr_code_card'
    >
      <img
        className='qr_code'
        src={imgConstants.QR_CODES.TO_ABOUT}
        alt='qr_code_to_about'
      />
      <p className='qr_code_card_text'>
        {t('TRY_IT_ON_MOBILE')}
      </p>
    </div>
  )
}
