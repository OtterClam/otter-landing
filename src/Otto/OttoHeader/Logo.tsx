import Image from 'next/image'
import LogoImage from 'public/logo.svg'

const Logo = () => {
  return (
    <div className="otto-header-logo__image">
      <LogoImage width="140" height="40" viewBox="0 0 994 270" />
    </div>
  )
}
export default Logo
