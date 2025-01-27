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
        {colorsData.map((palette, paletteIndex) => (
          <div key={`palette_${paletteIndex}`} className='palette_container'>
            {palette.map((color, colorIndex) => (
              <Color key={`color_${colorIndex}`} color={color} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
