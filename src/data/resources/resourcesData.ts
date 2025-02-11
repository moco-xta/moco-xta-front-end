import type { TResourcesPageData } from '@/types/data/components/layout/types'

import { animationData } from './animationData'
import { threeDData } from './threeDData'

export const resourcesPageData: TResourcesPageData = {
  key: 'resources',
  translationKey: 'RESOURCES',
  sections: [{ ...threeDData }, { ...animationData }],
}
