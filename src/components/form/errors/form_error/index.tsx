import React from 'react'
import { useTranslations } from 'next-intl'

import { FormErrorInterface } from '@/interfaces/formErrorInterface'

import './index.scss'

export default function FormError({ error, helperText }: FormErrorInterface) {
  const t = useTranslations()

  return (
    <>{error && <span className='input_error'>{t(`${helperText}`)}</span>}</>
  )
}
