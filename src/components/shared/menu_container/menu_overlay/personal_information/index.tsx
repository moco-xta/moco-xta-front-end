import React from 'react'

import './index.scss'

export default function PersonalInformation() {
  return (
    <div id='personal_information'>
      <div className='personal_information_column'>
        <a href='#'>X &#8599;</a>
        <a href='#'>Instagram &#8599;</a>
        <a href='#'>LinkedIn &#8599;</a>
      </div>
      <div className='personal_information_column'>
        <p id='email_address'>moco.xta@gmail.com</p>
        <p>+33 6 15 90 82 75</p>
      </div>
    </div>
  )
}
