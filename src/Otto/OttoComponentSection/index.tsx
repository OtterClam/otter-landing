import { useTranslation } from 'react-i18next'
import ImageTextSection from '../common/ImageTextSection'
import OttoComponentImage from './otto_components.png'
const { ImageSection, TextSection } = ImageTextSection

const OttoComponentSection = () => {
  const { t } = useTranslation()
  return (
    <ImageTextSection
      color="mode.otterDark"
      bgcolor="mode.lightGray200"
      title={t('otto.component.title')}
      slogan={t('otto.component.slogan')}
    >
      <ImageSection imgSrc={OttoComponentImage} />
      <TextSection subtitle={t('otto.component.subtitle')} content={t('otto.component.content')} />
    </ImageTextSection>
  )
}
export default OttoComponentSection
