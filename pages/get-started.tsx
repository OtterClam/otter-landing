import styled from 'styled-components';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Tab, Tabs, useMediaQuery } from '@material-ui/core';
import { tabletMediaQuery } from 'src/themes/mediaQuery';
import { Container } from 'src/components/common/Container';

import BuyClamsView from 'src/components/GetStarted/BuyClamsView';
import StakeClamsView from 'src/components/GetStarted/StakeClamsView';
import HoldPearlsView from 'src/components/GetStarted/HoldPearlsView';
import LockPearlsView from 'src/components/GetStarted/LockPearlsView';
import BondAssetsView from 'src/components/GetStarted/BondAssetsView';
import JoinCommunitySection from 'src/components/Home/JoinCommunitySection';

const StyledContainer = styled(Container)`
padding-top: 140px;
  background-color: ${(props) => props.theme.colors.light.lightGray100};
  @media ${tabletMediaQuery} {
    padding: 0;
    padding-top: 100px;
  }
`;

const GridLayout = styled.div`
  display: grid;
  grid-template: 'sidebar content';
  grid-template-columns: auto auto;
  grid-column-gap: 30px;
  @media ${tabletMediaQuery} {
    grid-template: 'sidebar' 'content';
    grid-column-gap: 0px;
  }
`;

const Grid = styled.div<{ $area: string }>`
  grid-area: ${(props) => props.$area};
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacings.lg};
`;
const CustomH1 = styled.h1`
  font-size: 60px;
  line-height: 90px;
  font-weight: 800;
  @media ${tabletMediaQuery} {
    font-size: 48px;
    line-height: 72px;
    font-weight: 800;
  }
`;

const StyledTabs = styled(Tabs)`
  grid-area: sidebar;
  height: auto;
  overflow: hidden;
  .MuiTabs-indicator {
    background-color: ${(props) => props.theme.colors.common.otterBlue};
  }
  .Mui-selected {
    color: ${(props) => props.theme.colors.common.otterBlue};
  }
  @media ${tabletMediaQuery} {
    width: 100vw;
  }
`;
const StyledTab = styled(Tab)`
  width: auto;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;

  .MuiTab-wrapper {
    align-items: flex-start;
  }
`;
const ContentCard = styled.div`
  padding: ${(props) => props.theme.spacings.lg};
  background-color: ${(props) => props.theme.colors.common.white};
  border-radius: 20px;
  @media ${tabletMediaQuery} {
    border-radius: 0px;
    margin-bottom: ${(props) => props.theme.spacings.lg};
  }
`;

enum FlowView {
  BuyClamsView = 'buy-clams',
  StakeClamsView = 'stake-clams',
  HoldPearlsView = 'hold-pearls',
  LockPearlsView = 'lock-pearls',
  BondAssetsView = 'bond-assets',
}

interface PanelProps {
  currentTab: FlowView;
}
const TabPanel = ({ currentTab }: PanelProps) => {
  const el = (() => {
    if (currentTab === FlowView.BuyClamsView) return <BuyClamsView />;
    if (currentTab === FlowView.StakeClamsView) return <StakeClamsView />;
    if (currentTab === FlowView.HoldPearlsView) return <HoldPearlsView />;
    if (currentTab === FlowView.LockPearlsView) return <LockPearlsView />;
    if (currentTab === FlowView.BondAssetsView) return <BondAssetsView />;
    return null;
  })();
  return <ContentCard>{el}</ContentCard>;
};

const checkViewQuery = (query: any): query is FlowView => {
  return Object.values(FlowView).includes(query);
};

const GetStartedView = () => {
  const isTablet = useMediaQuery(tabletMediaQuery);
  const router = useRouter();

  // NOTE: sync state currentTab with route query
  const [currentTab, setCurrentTab] = useState<FlowView>(FlowView.BuyClamsView);
  const prevTabRef = useRef<FlowView | undefined>();
  useEffect(() => {
    if (prevTabRef.current === currentTab) return;
    if (checkViewQuery(router.query.view)) {
      setCurrentTab(router.query.view);
      prevTabRef.current = currentTab;
    }
  }, [router, currentTab]);

  const handleChange = (_: ChangeEvent<{}>, newTabValue: FlowView) => {
    setCurrentTab(newTabValue);
    router.push({ pathname: '/get-started', query: { view: newTabValue } });
  };
  return (
    <>
      <StyledContainer>
        <Title>
          <CustomH1>Get Started</CustomH1>
          <h3>Stake, Chill, and Profit</h3>
        </Title>
        <GridLayout>
          <Grid $area="sidebar">
            <StyledTabs
              orientation={isTablet ? 'horizontal' : 'vertical'}
              scrollButtons="off"
              variant={isTablet ? 'scrollable' : 'standard'}
              value={currentTab}
              onChange={handleChange}
            >
              <StyledTab
                value={FlowView.BuyClamsView}
                label="How to Buy CLAMs?"
              />
              <StyledTab value={FlowView.StakeClamsView} label="Stake CLAMs" />
              <StyledTab value={FlowView.HoldPearlsView} label="Hold PEARLs" />
              <StyledTab value={FlowView.LockPearlsView} label="Lock PEARLs" />
              <StyledTab value={FlowView.BondAssetsView} label="Bond Assets" />
            </StyledTabs>
          </Grid>
          <Grid $area="content">
            <TabPanel currentTab={currentTab} />
          </Grid>
        </GridLayout>
      </StyledContainer>
      <JoinCommunitySection />
    </>
  );
};
export default GetStartedView;
