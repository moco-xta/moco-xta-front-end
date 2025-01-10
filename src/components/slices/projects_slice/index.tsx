import React, { useEffect, useState } from 'react'

import './index.scss'

export default function ProjectsSlice() {
  const [ready, set] = useState<boolean>(false)

  useEffect(() => {
    console.log('ready', ready)
  }, [ready])

  return (
    <section
      id='projects_slice'
      className={`projects_slice_zIndex ${!ready ? 'visible' : 'hidden'}`}
      onClick={() => set(true)}
    >
      <button id='button_test'>Click (needs fullscreen)</button>
    </section>
  )
}
