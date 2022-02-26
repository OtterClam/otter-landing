import { useTranslation } from 'react-i18next';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Image from 'next/image';
import ImageDesktopRoadMap from './image-desktop-road_map.jpg';
import ImageMobileRoadMap from './image-mobile-road_map.jpg';
import { tabletMediaQuery } from 'src/themes/mediaQuery';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.lightGray200,
  },
  image: {
    display: 'block'
  },
  h4: {
    fontSize: '48px',
    fontWeight: 800,
    textAlign: 'center',
    margin: 0,
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
      lineHeight: '54px',
    },
  },
}));

const OtterRoadMapSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const isTablet = useMediaQuery(tabletMediaQuery);
  const image = isTablet ? ImageMobileRoadMap : ImageDesktopRoadMap;

  return (
    <div className={`container ${classes.container}`}>
      <h4 className={classes.h4}>{t('otto.roadMap.title')}</h4>
      <Image
        className={classes.image}
        src={image}
        layout="responsive"
        width={image.width}
        height={image.height}
        alt="road map"
        loading="eager"
      />
    </div>
  );
};
export default OtterRoadMapSection;
