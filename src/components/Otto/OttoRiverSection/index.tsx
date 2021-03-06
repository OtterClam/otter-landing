import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import ImageTextSection from '../common/ImageTextSection'
import OttoRiverImage from './otto_river.png'

const useStyles = makeStyles((theme) => ({
  highlight: {
    color: theme.palette.otter.otterBlue,
  },
}))

const OtterRiverSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <ImageTextSection
      color="mode.otterDark"
      bgcolor="mode.lightGray200"
      title={t('otto.river.title')}
      slogan={t('otto.river.slogan')}
      imgSrc={OttoRiverImage}
      subtitle={
        <>
          {t('otto.river.subtitle1')}
          <br />
          {t('otto.river.subtitle2')} <span className={classes.highlight}>{t('otto.river.subtitleHighlight')}</span>{' '}
          {t('otto.river.subtitle3')}
        </>
      }
      content={t('otto.river.content')}
    />
  )
}
export default OtterRiverSection
