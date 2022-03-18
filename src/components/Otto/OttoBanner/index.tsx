import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import { StyledTelegramIcon, StyledDiscordIcon, StyledTwitterIcon } from 'src/components/common/SocialIcons'
import OttoHeroImage from './otto_hero.webp'
import OttoHeroBackground from './background-banner.webp'

import RoundedButton from '../../common/RoundedButton'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  container: {
    background: `url(${OttoHeroBackground.src}) center/cover no-repeat`,
    display: 'flex',
    paddingTop: '145px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      paddingTop: '60px',
      paddingBottom: '40px',
      textAlign: 'center',
    },
  },
  sectionLeft: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '245px',
    paddingBottom: '40px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '100px',
      paddingRight: '100px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '30px',
      paddingRight: '30px',
    },
  },
  sectionRight: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: '60px',
    fontWeight: 800,
    lineHeight: '90px',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '48px',
      lineHeight: '72px',
    },
  },
  slogan: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '36px',
    margin: 0,
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      lineHeight: '30px',
      marginBottom: '20px',
    },
  },
  description: {
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 700,
    margin: 0,
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
  buttons: {
    marginTop: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  image: {
    width: '100%',
  },
  highlight: {
    color: theme.palette.otter.clamPink,
  },
}))

const OttoBanner = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.container}>
      <div className={classes.sectionLeft}>
        <h2 className={classes.title}>
          {t('otto.banner.meet')} <span className={classes.highlight}>{t('otto.banner.otto')}</span>!
        </h2>
        <h3 className={classes.slogan}>{t('otto.banner.slogan')}</h3>
        <h4 className={classes.description}>{t('otto.banner.description')}</h4>
        <RoundedButton href="https://ottopia.app " type="solid" text={t('otto.banner.ottopia')} />
        <div className={classes.buttons}>
          <RoundedButton
            href="https://t.me/otterclam_official"
            type="outline"
            Icon={<StyledTelegramIcon $color="#1D2654" $width="24px" $height="24px" />}
            text="Telegram"
            iconSvgProps={{ viewBox: '0 0 32 32' }}
          />
          <RoundedButton
            href="https://discord.gg/otterclam"
            type="outline"
            Icon={<StyledDiscordIcon $color="#1D2654" $width="24px" $height="24px" />}
            text="Discord"
            iconSvgProps={{ viewBox: '0 0 32 32' }}
          />
          <RoundedButton
            href="https://twitter.com/otterclam"
            type="outline"
            Icon={<StyledTwitterIcon $color="#1D2654" $width="24px" $height="24px" />}
            text="Twitter"
            iconSvgProps={{ viewBox: '0 0 32 32' }}
          />
        </div>
      </div>
      <div className={classes.sectionRight}>
        <Image className={classes.image} src={OttoHeroImage} alt="banner" loading="eager" />
      </div>
    </div>
  )
}
export default OttoBanner
