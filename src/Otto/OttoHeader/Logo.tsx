import Image from 'next/image'
import LogoImage from 'public/logo.svg'

const Logo = () => {
  return <Image className="otto-header-logo__image" src={LogoImage} alt="logo" width={140} height={40} />
}
export default Logo
