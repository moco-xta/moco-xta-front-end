import React from 'react'
import { useTranslations } from 'next-intl'

import { FormikErrorInterface } from '@/interfaces/formikInterfaces'

import './index.scss'

export default function Error({ error, helperText }: FormikErrorInterface) {
  const t = useTranslations()

  return <>{error && <span className='input_error'>{t(`${helperText}`)}</span>}</>
}
