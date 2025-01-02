import React from 'react'
import { useTranslations } from 'next-intl'

import { ParagraphTitle, SectionSubtitle, SectionTitle } from '@/components/layout/titles'
import { ChannelsLinks, DocumentationLinks, YoutubePlaylistLink } from '@/components/layout/links'

import { default as resourcesConstants } from '@/constants/resources/resourcesConstants.json'

import './index.scss'

export default function ThreeDimensional() {
  const t = useTranslations('RESOURCES.3D')

  return (
    <section
      id='resources_three_dimensional_section'
      className='section'
    >
      <SectionTitle text={'3D'} />
      <SectionSubtitle text={'Javascript libraries'} />

      <ParagraphTitle text={'three.js'} />
      <YoutubePlaylistLink
        url={resourcesConstants['3D'].javacriptLibraries.threejs.youtubePlaylist.url}
      />
      <p>{t(resourcesConstants['3D'].javacriptLibraries.threejs.description)}</p>
      {/* <DocumentationLinks
        url={resourcesConstants['3D'].javacriptLibraries.threejs.documentation.url}
        languages={resourcesConstants['3D'].javacriptLibraries.threejs.documentation.languages}
      /> */}

      <ParagraphTitle text={'react-three-fiber'} />
      <YoutubePlaylistLink
        url={resourcesConstants['3D'].javacriptLibraries.reactThreeFiber.youtubePlaylist.url}
      />
      <p>{t(resourcesConstants['3D'].javacriptLibraries.reactThreeFiber.description)}</p>
      <DocumentationLinks
        documentation={resourcesConstants['3D'].javacriptLibraries.reactThreeFiber.documentation}
      />
      <ChannelsLinks
        channels={resourcesConstants['3D'].javacriptLibraries.reactThreeFiber.channels}
      />

      <SectionSubtitle text={'Shaders'} />
      <YoutubePlaylistLink url={resourcesConstants['3D'].shaders.youtubePlaylist.url} />
      {/* {Object.entries(resourcesConstants['3D'].shaders).map(([key, value]) => (
        <>
          <p>{key}</p>
          {value.map((item) => (
            <ExternalLink
              url={item.url}
              languages={item.languages}
            />
          ))}
        </>
      ))} */}
      <SectionSubtitle text={'Tools'} />
      {resourcesConstants.tools.map((tool) => (
        <>
          <p>{tool.name}</p>
          {/* <ExternalLink
            url={tool.url}
            languages={tool.languages}
          /> */}
        </>
      ))}
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/qJEWOTZnFeg?si=kHXc2AnaRfM46Q_T'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    </section>
  )
}
