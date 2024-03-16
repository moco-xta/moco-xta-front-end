import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { useTranslations } from 'next-intl'

import './index.scss'

export default function ScrollDown() {
  const t = useTranslations('PROJECTS')

  return (
    <div id='scroll_dwon_container'>
      <p>{t('SCROLL_DOWN')}</p>
      <FaArrowDown id='arrow_down' />
    </div>
  )
}
