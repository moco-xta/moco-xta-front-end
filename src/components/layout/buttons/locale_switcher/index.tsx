import React, { ChangeEvent, useTransition } from 'react'
import { useParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import type { TLocaleSwitcher } from '@/types/components/layout/buttons/types'

import { localesConstants } from '@/i18n/i18n.config'
import { usePathname, useRouter } from '@/i18n/routing'

function LocaleSwitcherSelect({ defaultValue, children, label }: TLocaleSwitcher) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(
        // @ts-ignore
        { pathname },
        { locale: nextLocale },
      )
    })
  }

  return (
    <label>
      <p>{label}</p>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  )
}

export default function LocaleSwitcher() {
  const t = useTranslations('LOCALES')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={'Label'}
    >
      {localesConstants.map((localeOption) => (
        <option
          key={localeOption}
          value={localeOption}
        >
          {t(`${localeOption.toUpperCase()}`)}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
