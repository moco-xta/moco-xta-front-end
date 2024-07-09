import React from 'react'

import MainSkillsSlice from '../main_skills_slice'
import PerformedWithSlice from '../performed_with_slice'

export default function SkillsSlice() {
  return (
    <>
      <MainSkillsSlice />
      <PerformedWithSlice />
    </>
  )
}
