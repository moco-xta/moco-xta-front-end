import React from 'react'
import { Box, Html } from '@react-three/drei'

import './index.scss'

export default function ContactTextScene() {
  return (
    <>
      <Html /* zIndexRange={[-1, -10]} */ prepend fullscreen>
        <div /* ref={(el) => setDomEl(el)} */ className="dom-element">
          <p className="text">
            WHEN <br />
            WILL <br />
            WE <br />
            MEET ?<br />
          </p>
        </div>
      </Html>
      <Box />
    </>
  )
}
