import type { TResourcesPageData } from '@/types/data/components/layout/types'

import { animationData } from './animationData'
import { dataData } from './dataData'
import { threeDData } from './threeDData'

export const resourcesPageData: TResourcesPageData = {
  key: 'resources',
  translationKey: 'RESOURCES',
  sections: [{ ...threeDData }, { ...animationData }, { ...dataData }],
}
