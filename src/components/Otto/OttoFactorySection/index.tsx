import { useTranslation } from 'react-i18next'
import ImageTextSection from '../common/ImageTextSection'
import OttoFactoryImage from './otto_factory.png'

const OttoFactorySection = () => {
  const { t } = useTranslation()
  return (
    <ImageTextSection
      color="mode.otterDark"
      bgcolor="mode.white"
      title={t('otto.factory.title')}
      slogan={t('otto.factory.slogan')}
      imgSrc={OttoFactoryImage}
      subtitle={t('otto.factory.subtitle')}
      content={t('otto.factory.content')}
    />
  )
}
export default OttoFactorySection
