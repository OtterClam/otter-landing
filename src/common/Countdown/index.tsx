import { Box, makeStyles, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useCountdown } from './hook'
import { getNumber } from './util'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '18px',
    lineHeight: '27px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  content: {
    maxWidth: '730px',
    padding: '20px',
    borderRadius: '20px',
    margin: '0 20px',
  },
  numbers: {
    display: 'flex',
    justifyContent: 'center',
  },
  numberGroup: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '78px',

    '&:not(:last-child)': {
      marginRight: '20px',
    },

    [theme.breakpoints.down('md')]: {
      width: '54px',
    },
  },
  numberLabel: {
    width: '100%',
    marginTop: '10px',
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 'normal',

    [theme.breakpoints.down('md')]: {
      lineHeight: '18px',
    },
  },
  number: {
    width: '36px',
    height: '48px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 700,

    '&:first-child': {
      marginRight: '6px',
    },

    [theme.breakpoints.down('md')]: {
      width: '24px',
      height: '36px',
      fontSize: '16px',
    },
  },
  numberText: {
    fontSize: '24px',
  },
}))

const Number = ({ value }: { value: number }) => {
  const classes = useStyles()
  return (
    <Box bgcolor="otter.otterBlue" component="span" className={classes.number}>
      {value}
    </Box>
  )
}

interface NFTCountdownProps {
  title: string
  color?: string
  bgcolor?: string
  onTimeUp: () => void
  dueDate: Date
}

export default function NFTCountdown({
  title,
  color = 'text.primary',
  bgcolor = 'mode.lightGray200',
  dueDate,
  onTimeUp,
}: NFTCountdownProps) {
  const cd = useCountdown(dueDate)
  const { t } = useTranslation()
  const classes = useStyles()

  useEffect(() => {
    if (cd.seconds < 0) {
      onTimeUp()
    }
  }, [cd.seconds, onTimeUp])

  return (
    <section className={classes.container}>
      <Box className={classes.content} color={color} bgcolor={bgcolor} textAlign="center" component="div">
        <Box className={classes.title}>
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
        </Box>
        <div className={classes.numbers}>
          <div className={classes.numberGroup}>
            <Number value={getNumber(cd.days, 0)} />
            <Number value={getNumber(cd.days, 1)} />
            <Box className={classes.numberLabel}>{t('time.days')}</Box>
          </div>

          <div className={classes.numberGroup}>
            <Number value={getNumber(cd.hours, 0)} />
            <Number value={getNumber(cd.hours, 1)} />
            <Box className={classes.numberLabel}>{t('time.hours')}</Box>
          </div>

          <div className={classes.numberGroup}>
            <Number value={getNumber(cd.minutes, 0)} />
            <Number value={getNumber(cd.minutes, 1)} />
            <Box className={classes.numberLabel}>{t('time.minutes')}</Box>
          </div>

          <div className={classes.numberGroup}>
            <Number value={getNumber(cd.seconds, 0)} />
            <Number value={getNumber(cd.seconds, 1)} />
            <Box className={classes.numberLabel}>{t('time.seconds')}</Box>
          </div>
        </div>
      </Box>
    </section>
  )
}
