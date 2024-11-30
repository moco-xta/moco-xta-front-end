import React from 'react'

import PhoneNumber from './phone_number/PhoneNumber'
import ContactMe from './phone_number/ContactMe'

export default function ContactScene() {
  return (
    <group>
      <ContactMe />
      <PhoneNumber />
    </group>
  )
}
