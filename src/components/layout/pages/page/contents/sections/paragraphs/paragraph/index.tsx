import React from 'react'

import type { TParagraph } from '@/types/components/layout/types'
import type {
  TResourcesParagraphData,
  TSkillsParagraphData,
} from '@/types/data/components/layout/types'

import SkillsParagraph from '../skills_paragraph'
import ResourcesParagraph from '../resources_paragraph'

import './index.scss'

export default function Paragraph({ translationPath, paragraphData }: TParagraph) {
  return (
    <>
      {translationPath.split('.')[0] === 'SKILLS' && (
        <SkillsParagraph
          key={`skills_paragraph_${paragraphData.key}`}
          translationPath={translationPath}
          paragraphData={paragraphData as TSkillsParagraphData}
        />
      )}
      {translationPath.split('.')[0] === 'RESOURCES' && (
        <ResourcesParagraph
          key={`resources_paragraph_${paragraphData.key}`}
          translationPath={translationPath}
          paragraphData={paragraphData as TResourcesParagraphData}
        />
      )}
    </>
  )
}
