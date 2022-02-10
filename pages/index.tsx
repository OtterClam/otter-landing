import type { NextPage } from 'next'
import styled from 'styled-components'

import Head from 'next/head'
import HomeBanner from 'src/components/Home/HomeBanner'
import AboutOtterSection from 'src/components/Home/AboutOtterSection'
import ImageContentSections from 'src/components/Home/ImageContentSections'
import GetStartedSection from 'src/components/Home/GetStartedSection'
import JoinCommunitySection from 'src/components/Home/JoinCommunitySection'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.common.white};
  position: relative;
  overflow: hidden;
`

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>OtterClam | A DAO-governed Land Where NFTs Make Finance Fun</title>
        <meta property="og:title" content="OtterClam | A DAO-governed Land Where NFTs Make Finance Fun" />
        <meta
          property="og:description"
          content="We are passionate about decentralization, and we believe that in an industry where practically everything can be replicated, our community culture and the art that gave it life, are what ultimately sets us apart."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_URL + '/og.jpg'} />
      </Head>

      <main>
        <HomeBanner />
        <AboutOtterSection />
        <ImageContentSections />
        <GetStartedSection />
        <JoinCommunitySection />
      </main>
    </Container>
  )
}

export default Home
