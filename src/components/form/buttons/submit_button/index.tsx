import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function SubmitButton() {
  const t = useTranslations()

  return <button type='submit'>{t('FORMS.SUBMIT')}</button>
}
