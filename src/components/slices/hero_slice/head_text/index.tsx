import React from 'react'
import { MdComputer } from 'react-icons/md'

import './index.scss'

export default function HeadText() {
  return (
    <div id='head_text'>
      <p id='role'>
        <MdComputer />
        <span>Creative developer</span>
      </p>
      <h1 id='heading'>
        Hi, I'm <span className='gradient_text'>Federico</span>
      </h1>
      <h3 id='subheading'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </h3>
    </div>
  )
}
