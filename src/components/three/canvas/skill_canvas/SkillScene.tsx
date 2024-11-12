import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

export default function SkillScene() {
  const SelectedPad = useSelector((state: RootState) => state.rubiksCube.selectedPad)

  return (<>
    {SelectedPad}
  </>
  )
}
