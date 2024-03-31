import React from 'react'
import { FaArrowDown } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function ScrollDown() {
  const t = useTranslations('PROJECTS')

  return (
    <div
      id='scroll_dwon_container'
      style={{ top: '85vh', color: variables.white }}
    >
      <p>{t('SCROLL_DOWN')}</p>
      {/* <div id='arrow_down_container'> */}
      <FaArrowDown id='arrow_down' />
      {/* </div> */}
    </div>
  )
}
