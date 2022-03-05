import { useTranslation } from 'react-i18next'
import { Box, Divider, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import RoundedButton from '../../common/RoundedButton'
import WhiteListRightBg from './background-otto_whitelist_right.png'
import WhiteListLeftBg from './background-otto_whitelist_left.png'
import WhiteListTopBg from './background-otto_whitelist_top.png'
import Image from 'next/image'
import { OTTO_PUBLIC_MINT_DATE, OTTO_WL_MINT_START_TIME, OTTO_WL_MINT_END_TIME } from 'src/constants'
import format from 'date-fns/format'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  content: {
    backgroundColor: theme.palette.mode.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    textAlign: 'center',
    position: 'relative',
    padding: '80px 0',
    [theme.breakpoints.down('md')]: {
      padding: '10px 40px 40px 40px',
    },
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      gap: '20px',
      flexDirection: 'column',
    },
  },
  image: {
    position: 'relative',
    width: '30%',
  },
  tabletImage: {
    position: 'relative',
    width: '100%',
    paddingBottom: '60%',
  },
  body2: {
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
  h3: {
    fontSize: '60px',
    lineHeight: '90px',
    fontWeight: 800,
  },
  h5: {
    fontSize: '36px',
    fontWeight: 800,
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      lineHeight: '54px',
    },
  },
  body1: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '36px',
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      lineHeight: '30px',
      marginBottom: '20px',
    },
  },
  highlight: {
    color: theme.palette.mode.highlight,
  },
}))

const useSectionStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.mode.highlight,
    fontSize: '20px',
    fontWeight: 700,
  },
  startTime: {
    fontSize: '24px',
    fontWeight: 700,
    marginTop: '10px',
  },
  endTime: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '30px',
  },
}))

const customTabletMediaQuery = '(max-width: 1300px)'

const FORMAT = 'MMMM/dd HH:mm'

const SaleInfoSection = ({
  title,
  startTime,
  endTime,
  link,
}: {
  title: string
  startTime: Date
  endTime?: Date
  link: string
}) => {
  const classes = useSectionStyles()
  const { t } = useTranslation()
  return (
    <Box paddingX="20px">
      <p className={classes.title}>{title}</p>
      <p className={classes.startTime}>{format(startTime, FORMAT)}</p>
      <p className={classes.endTime}>{endTime ? `~ ${format(endTime, FORMAT)}` : 'Until sold out'}</p>
      <RoundedButton href={link} type="outline" text={t('common.addToCalendar')} />
    </Box>
  )
}

const OttoWhitelistSection = () => {
  const classes = useStyles()
  const isTablet = useMediaQuery(customTabletMediaQuery)
  const { t } = useTranslation()
  return (
    <section className={classes.container}>
      {isTablet ? (
        <div className={classes.tabletImage}>
          <Image layout="fill" objectFit="cover" src={WhiteListTopBg} alt="whitelist" loading="eager" />
        </div>
      ) : (
        <div className={classes.image}>
          <Image layout="fill" objectFit="cover" src={WhiteListLeftBg} alt="whitelist" loading="eager" />
        </div>
      )}
      <div className={`${classes.content}`}>
        <p className={classes.body2}>{t('otto.whitelist.amount')}</p>
        <h3 className={classes.h3}>5,000 Ottos</h3>
        <Box marginY="40px">
          <div className={classes.dateContainer}>
            <SaleInfoSection
              title="Phase 1: WL only"
              startTime={OTTO_WL_MINT_START_TIME}
              endTime={OTTO_WL_MINT_END_TIME}
              link="https://www.google.com/calendar/render?action=TEMPLATE&text=Otto+WL+Mint+Date&dates=20220319T130000Z%2F20220320T125900Z"
            />
            <Divider orientation={isTablet ? 'horizontal' : 'vertical'} flexItem />
            <SaleInfoSection
              title="Phase 2: Public Sale"
              startTime={OTTO_PUBLIC_MINT_DATE}
              link="https://www.google.com/calendar/render?action=TEMPLATE&text=Otto+Public+Mint+Date&dates=20220320T130000Z%2F20220320T130000Z"
            />
          </div>
        </Box>
        <p className={classes.body1}>
          {t('otto.whitelist.joinDescription1')}
          <br />
          {t('otto.whitelist.joinDescription2')}
        </p>
        <RoundedButton href="https://discord.gg/otterclam" type="solid" text={t('otto.whitelist.joinButton')} />
      </div>
      {!isTablet && (
        <div className={classes.image}>
          <Image layout="fill" objectFit="cover" src={WhiteListRightBg} alt="whitelist" loading="eager" />
        </div>
      )}
    </section>
  )
}
export default OttoWhitelistSection
