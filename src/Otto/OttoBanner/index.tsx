import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import TelegramIcon from 'public/icons/telegram.svg'
import DiscordIcon from 'public/icons/discord.svg'
import TwitterIcon from 'public/icons/twitter.svg'
import OttoHeroImage from './otto_hero.png'
import OttoHeroBackground from './background-banner.png'

import RoundedButton from '../common/RoundedButton'
import { light } from 'src/themes'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  container: {
    background: `url(${OttoHeroBackground.src}) center/cover no-repeat`,
  },
  highlight: {
    color: light.palette.otter.clamPink,
  },
}))

const OttoBanner = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={`otto-banner__container ${classes.container}`}>
      <div className="otto-banner__section left">
        <h2 className="otto-banner__title">
          {t('otto.banner.meet')} <span className={classes.highlight}>{t('otto.banner.otto')}</span>!
        </h2>
        <h3 className="otto-banner__slogan">{t('otto.banner.slogan')}</h3>
        <h4 className="otto-banner__description">{t('otto.banner.description')}</h4>
        <div className="otto-banner__buttons">
          <RoundedButton
            href="https://t.me/otterclam_official"
            type="outline"
            icon={TelegramIcon}
            text="Telegram"
            iconSvgProps={{ viewBox: '0 0 32 32' }}
          />
          <RoundedButton
            href="https://discord.gg/otterclam"
            type="outline"
            icon={DiscordIcon}
            text="Discord"
            iconSvgProps={{ viewBox: '0 0 32 32' }}
          />
          <RoundedButton
            href="https://twitter.com/otterclam"
            type="outline"
            icon={TwitterIcon}
            text="Twitter"
            iconSvgProps={{ viewBox: '0 0 32 32' }}
          />
        </div>
      </div>
      <div className="otto-banner__section right">
        <Image className="otto-banner__image" src={OttoHeroImage} alt="banner" />
      </div>
    </div>
  )
}
export default OttoBanner
