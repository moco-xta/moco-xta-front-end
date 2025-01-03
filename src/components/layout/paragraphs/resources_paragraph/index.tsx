import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

import type { TExternalLink, TResourcesParagraph } from '@/types/layout'

import { ParagraphTitle } from '../../titles'
import { LinksArray } from '../../links'

import './index.scss'

export default function ResourcesParagraph({
  translationPathPrefix,
  paragraphData,
}: TResourcesParagraph) {
  const t = useTranslations()

  const [translationPath] = useState<string>(
    `${translationPathPrefix}.PARAGRAPHS.${paragraphData.translationKey}`,
  )

  return (
    <div className='resources_paragraph'>
      <ParagraphTitle text={t(`${translationPath}.PARAGRAPH_TITLE`)} />
      <p className='resources_paragraph_description'>
        {t(`${translationPath}.PARAGRAPH_DESCRIPTION`)}
      </p>
      <LinksArray
        translationPathPrefix={translationPath}
        title={t('DOCUMENTATION')}
        links={paragraphData.documentation as unknown as TExternalLink[]}
      />
      {paragraphData.channels.length > 0 && (
        <LinksArray
          translationPathPrefix={translationPath}
          title={t('CHANNELS')}
          links={paragraphData.channels as unknown as TExternalLink[]}
          youtubePlaylistlink={paragraphData.youtubePlaylistlink}
        />
      )}
      {paragraphData.articles.length > 0 && (
        <LinksArray
          translationPathPrefix={translationPath}
          title={t('ARTICLES')}
          links={paragraphData.articles as unknown as TExternalLink[]}
          youtubePlaylistlink={paragraphData.youtubePlaylistlink}
        />
      )}
    </div>
  )
}
