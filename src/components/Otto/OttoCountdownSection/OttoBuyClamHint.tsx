import { useTranslation } from 'react-i18next'
import CLAM from 'public/tokens/CLAM.svg'
import { SvgIcon, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.darkGray400,
    border: `2px solid ${theme.palette.mode.darkGray300}`,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '560px',
    padding: '20px',
    marginTop: '40px',
    borderRadius: '15px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },
  image: {
    marginBottom: '10px'
  },
  content: {
    color: theme.palette.mode.white,
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
    padding: '0 14px 0 20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '22px',
      padding: '0 14px 0 20px',
      marginBottom: '10px',
      textAlign: 'center'
    }
  },
  highlight: {
    color: `${theme.palette.otter.clamPink} !important`,
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
    minWidth: '74px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '22px',
    }
  },
}))

const OttoBuyClamHint = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <SvgIcon component={CLAM} viewBox="0 0 32 32" style={{ height: 60, width: 60 }} />
      </div>
      <div className={classes.content}>{t('otto.countdown.hintDescription')}</div>
      <a
        className={classes.highlight}
        target="__blank"
        href="https://quickswap.exchange/#/swap?outputCurrency=0xC250e9987A032ACAC293d838726C511E6E1C029d"
      >
        {t('otto.countdown.buyNow')}
      </a>
    </div>
  )
}
export default OttoBuyClamHint
