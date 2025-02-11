import React from 'react'

import type { TResourcesParagraph } from '@/types/components/layout/types'

export default function ResourcesParagraph({
  translationPath,
  // paragraphData,
}: TResourcesParagraph) {
  return <div>{translationPath}</div>
}
