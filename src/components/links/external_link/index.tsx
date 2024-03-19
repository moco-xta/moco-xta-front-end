import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

import { ExternalLinkinterface } from '@/interfaces/externalLinkinterface'

import './index.scss'

export default function ExternalLink({ url, text }: ExternalLinkinterface) {
  return (
    <a
      className='external_link_a'
      href={url}
      target='_blank'
    >
      <h3 className='external_link_text'>{text}</h3>
      <FaExternalLinkAlt />
    </a>
  )
}
