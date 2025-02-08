import React from 'react'

import BasedInParisGroup from './based_in/BasedInParisGroup'
import ContactMeGroup from './contact_me/ContactMeGroup'
import PhoneNumberGroup from './phone_number/PhoneNumberGroup'

export default function ContactScene() {
  return (
    <group>
      <BasedInParisGroup />
      <ContactMeGroup />
      <PhoneNumberGroup />
    </group>
  )
}
