import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import type { TPage } from '@/types/components/layout/types'
import type { TRubiksCubeStatus } from '@/types/redux/types'

import { RootState } from '@/redux/store'

import { PageProvider } from '@/contexts/PageContext'

import { SideNavigationMenuLeft, SideNavigationMenuRight } from './menus'
import { PageContent } from './contents'
import { QuitRubiksCube } from '../../buttons'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

import './index.scss'

const SCALE = 0.5 // TODO: Add to data

function ReplacingContent() {
  const [content, setContent] = useState<React.ReactNode>('Ready! You can play!')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContent(<QuitRubiksCube />)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return <div>{content}</div>
}

export default function Page({
  pageData,
  displayPage = true,
  extraButtons,
  backgroundCanvas,
}: TPage) {
  const status = useSelector((state: RootState) => state.rubiksCubeState.status)

  useEffect(() => {
    const contentElement = document.getElementById(`${pageData.key}_content`)
    if (contentElement) {
      contentElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  })

  return (
    <>
      {backgroundCanvas && <div id='background_canvas'>{backgroundCanvas}</div>}
      {displayPage ? (
        <PageProvider pageData={pageData}>
          <div className='page_container'>
            <div className='page'>
              <SideNavigationMenuLeft
                pageData={pageData}
                extraButtons={extraButtons}
              />
              <PageContent pageData={pageData} />
              <SideNavigationMenuRight pageData={pageData} />
            </div>
          </div>
        </PageProvider>
      ) : (
        <div className='canvas_dashboard'>
          {status === ('mix' as TRubiksCubeStatus) && (
            <Image
              alt='mix gif'
              src={imgConstants.GIF.MIX}
              width={480 * SCALE}
              height={358 * SCALE}
            />
          )}
          {status === ('playing' as TRubiksCubeStatus) && <ReplacingContent />}
        </div>
      )}
    </>
  )
}
