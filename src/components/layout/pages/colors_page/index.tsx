import React from 'react'

import { PageTitle } from '../../titles'
import Color from './color'

import { colorsData } from '@/data/colors/colorsData'

import './index.scss'

export default function ColorPage() {
  return (
    <div id='color_page'>
      <div id='color_content'>
        <PageTitle translationPath={'COLORS.TITLE'} />
        {colorsData.map((palette, index) => (
          <div className='palette_container'>
            {palette.map((color) => (
              <Color color={color} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
