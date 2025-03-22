import type { TSkillData, TSectionData } from '@/types/data/components/layout/types'

export function getIndexByPropertyValue(
  array: TSectionData[] | TSkillData[],
  property: keyof TSectionData | keyof TSkillData,
  value: string,
) {
  return array.findIndex(
    (item) => (item as TSectionData | TSkillData)[property as keyof typeof item] === value,
  )
}
