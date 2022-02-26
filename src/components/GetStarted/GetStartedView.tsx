import styled from 'styled-components'
import { tabletMediaQuery } from 'src/themes/mediaQuery'
import { Divider, Container as CardContainer, ImageContainer, HintText } from './common'

import Image from 'next/image'
import ImageMatic2Clam from './images/image-matic2clam.png'
import ImageClam2SClam from './images/image-clam2sclam.png'
import ImageClam2Pearl from './images/image-clam2pearl.png'
import ImagePearl2Chest from './images/image-pearl2chest.png'
import ImageBond2SClam from './images/image-bond2sclam.png'
import { useTranslation } from 'react-i18next'

const StyledContainer = styled.div`
  padding-top: 140px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colors.light.lightGray100};
  @media ${tabletMediaQuery} {
    padding-top: 100px;
    padding-bottom: ${(props) => props.theme.spacings.lg};
  }
`

const Title = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacings.lg};
`
const CustomH1 = styled.h1`
  font-size: 60px;
  line-height: 90px;
  font-weight: 800;
  @media ${tabletMediaQuery} {
    font-size: 48px;
    line-height: 72px;
    font-weight: 800;
  }
`

const ContentCard = styled(CardContainer)`
  width: 100%;
  max-width: 825px;
  margin: auto;
  padding: ${(props) => props.theme.spacings.lg};
  background-color: ${(props) => props.theme.colors.common.white};
  border-radius: 20px;
  @media ${tabletMediaQuery} {
    border-radius: 0px;
  }
`

const GetStartedView = () => {
  const { t } = useTranslation()
  return (
    <StyledContainer>
      <Title>
        <CustomH1>Getting Started</CustomH1>
        <h3>Stake, Chill, and Harvest</h3>
      </Title>
      <ContentCard>
        <p>
          So you’ve made it to OtterClam, you like what you see, and you’re ready to dive in. Now what? Well, you’ll
          need to get some CLAM, the native currency of the entire Otter Kingdom ecosystem. Here’s how:
        </p>
        <Divider />
        <h3>{t('getStarted.paragraph2.title')}</h3>
        <p>{t('getStarted.paragraph2.content')}</p>
        <ImageContainer>
          <Image
            src={ImageMatic2Clam}
            width={162}
            height={74}
            layout="intrinsic"
            alt="Matic to Clam"
          />
        </ImageContainer>
        <p>
          Need more details than that? We got you. Check out
          <a href="https://hackmd.io/G4NdFuxLQiO8Oannby5WzQ" target="_blank" rel="noreferrer">
            {' '}
            this tutorial{' '}
          </a>
          for more details on how to buy CLAM.
        </p>
        <Divider />
        <h3>Stake CLAMs</h3>
        <p>
          Once you’ve acquired the amount of CLAM you want (make sure you didn’t use *all* of your MATIC, you’ll need
          some for gas), you can simply stake your CLAM to start earning rewards. Go{' '}
          <a href="https://app.otterclam.finance/#/stake" target="_blank" rel="noreferrer">
            here
          </a>{' '}
          to stake.{' '}
        </p>
        <ImageContainer>
          <Image
            src={ImageClam2SClam}
            width={162}
            height={74}
            layout="intrinsic"
            alt="Clam to sClam"
          />
        </ImageContainer>
        <p>
          This is the most basic way to take advantage of holding CLAM. Staking is immediate and you can unstake anytime
          you like. Maximum flexibility, maximum convenience. For those of you interested in increasing your CLAM
          returns, read on.{' '}
        </p>
        <Divider />
        <h3>Convert to PEARL</h3>
        <p>
          Converting your sCLAM to PEARL requires “wrapping.” Wrapping your sCLAM ensures you receive sCLAM rebase
          rewards, but it also opens up a new tier of investment potential.
        </p>
        <ImageContainer>
          <Image
            src={ImageClam2Pearl}
            width={270}
            height={74}
            layout="intrinsic"
            alt="Clam to Pearl"
          />
        </ImageContainer>
        <p>
          To wrap your sCLAM, go{' '}
          <a href="https://app.otterclam.finance/#/wrap" target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>
        <HintText>
          Note: because some countries consider each rebase reward a taxable event, wrapping your sCLAM avoids this
          issue. Your PEARL’s value will reflect the rebase rewards of your staked CLAM.
        </HintText>
        <Divider />
        <h3>Lock PEARL</h3>
        <p>
          Now that you’ve got some PEARL and we know you mean business, let’s briefly explore PEARL chests. If you’re
          not ready to lock up your PEARL, but you like the potential tax advantages of holding them while accruing
          rewards, no problem. You can simply hold and enjoy the gains. If treasure chests filled with PEARLS sound
          enticing to you, keep reading.
        </p>
        <h3>PEARL Chests</h3>
        <ImageContainer>
          <Image
            src={ImagePearl2Chest}
            width={182}
            height={74}
            layout="intrinsic"
            alt="Pearl to Chest"
          />
        </ImageContainer>
        <p>
          The Otter Kingdom has a huge vault deep below the riverbed containing countless chests ready to secure your
          PEARLs. The protocol is designed to offer you exceptionally high APYs for trusting us with your PEARL. The
          terms for these chests vary from 14 to 180 days. The longer you’re willing to lock up your PEARL, the larger
          the share of each reward rebase we’re willing to offer you.
          <br />
          <br />
          Think it over and decide what suits your risk management strategy before you lock up your PEARL. If all of
          this sounds great to you, but you’d like a little more information, go{' '}
          <a
            href="https://otterclam.medium.com/introducing-pearl-chests-and-pearl-notes-70a61748963f"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{' '}
          to get better acquainted with PEARL chests. If you’ve already thought about it, and you’re ready to lock up
          your PEARLs, go{' '}
          <a href="https://app.otterclam.finance/#/pearl-chests?tab=lockup" target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>
        <Divider />
        <h3>Bond</h3>
        <p>
          Bonding is an easy way for you to get CLAM at a discount, and you may be able to use a few other assets you
          already have. Basically, by committing to a 5-day bond, OtterClam is able to provide a discount to you when
          the protocol needs liquidity for certain assets.
        </p>
        <ImageContainer>
          <Image
            src={ImageBond2SClam}
            width={162}
            height={74}
            layout="intrinsic"
            alt="Bond to sClam"
          />
        </ImageContainer>
        <p>
          Now, we have (4,4) bonds that allow you to enjoy rewards from the time you bond until it’s time to claim your
          CLAM 5 days later. To learn more about bonding and the bonding pairs we currently offer, go{' '}
          <a
            href="https://otterclam.medium.com/level-up-otters-4-4-is-here-72e11cf56270"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </ContentCard>
    </StyledContainer>
  )
}
export default GetStartedView
