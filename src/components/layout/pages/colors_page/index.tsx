import React from 'react'
import { useTranslations } from 'next-intl'

import { PageTitle } from '../../titles'
// import Color from './color'

// import { colorsData } from '@/data/colors/colorsData'

import './index.scss'

export default function ColorPage() {
  const t = useTranslations('COLORS')

  return (
    <div id='color_page'>
      <div id='color_content'>
        <PageTitle translationPath={'COLORS.TITLE'} />
        <div id='colors_introduction'>
          {t.rich('INTRODUCTION', {
            p: (chunk) => <p>{chunk}</p>,
          })}
        </div>
        {/* {colorsData.map((palette, index) => (
          <div key={`palette_${index}`} className='palette_container'>
            {palette.map((color) => (
              <Color key={`color_${color}`} color={color} />
            ))}
          </div>
        ))} */}
      </div>
    </div>
  )
}
