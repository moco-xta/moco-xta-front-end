import { MainSkillsDataInterface } from '@/interfaces/new/dataInterfaces'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

export const mainSkillsData: MainSkillsDataInterface = {
  mainSkills: [
    {
      key: 'NEXTJS',
      backgroundImage: imgConstants.HERO.MAIN_SKILLS.LOGO_NEXTJS,
    },
    {
      key: 'ANGULAR',
      backgroundImage: imgConstants.HERO.MAIN_SKILLS.LOGO_ANGULAR,
    },
    {
      key: 'SPRING',
      backgroundImage: imgConstants.HERO.MAIN_SKILLS.LOGO_SPRING,
    },
  ],
}
