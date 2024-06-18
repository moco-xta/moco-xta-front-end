import React from 'react'
import { LuRotate3D } from 'react-icons/lu'

import './index.scss'

export default function MobileInstructions() {
  return (
    <div id='mobile_instructions'>
      <p>
        Deplacez{' '}
        <LuRotate3D
          id='rotate_3D_icon'
          size={35}
        />{' '}
        votre télephone ou tablette pour orienter la camera
      </p>
      <p id='displacement_mobile_instructions'>
        Le déplacement arrive prochainement! :&#41;
      </p>
      <button id='button'>Enter</button>
    </div>
  )
}
