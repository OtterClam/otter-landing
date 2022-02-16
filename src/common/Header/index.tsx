import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@material-ui/core'
import DesktopHeader from './DesktopHeader'
import TabletHeader from './TabletHeader'
import { LinkMetadata } from './type'

const customMediaQuery = '(max-width: 1300px)'

export default function OttoHeader() {
  const isTablet = useMediaQuery(customMediaQuery)

  const { t } = useTranslation()
  const MENU_LINKS: LinkMetadata[] = useMemo(
    () => [
      { text: t('header.otto'), href: '/otto', new: true, external: false },
      { text: t('header.treasury'), href: 'https://app.otterclam.finance/#/dashboard', new: false,  external: true },
      // { text: t('otto.header.airdrop'), href: 'https://www.otterclam.finance/#/nft', new: false },
      { text: t('header.getStarted'), href: '/get-started', new: false,  external: false },
    ],
    [t]
  )

  if (isTablet) return <TabletHeader linkMetadata={MENU_LINKS} />
  return <DesktopHeader linkMetadata={MENU_LINKS} />
}
