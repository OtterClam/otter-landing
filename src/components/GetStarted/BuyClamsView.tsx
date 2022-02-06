import Image from 'next/image';
import ImageBuyClamStep3 from './images/image-buy_clam-step3.png';
import ImageBuyClamStep4 from './images/image-buy_clam-step4.png';
import ImageBuyClamStep6 from './images/image-buy_clam-step6.png';
import { Container, SubContainer, Divider, ListWithoutDeco, ImageContainer } from './common';

const BuyClamsView = () => {
  return (
    <Container>
      <h2>How to Buy CLAMs?</h2>
      <p>
        OtterClam is an OHM fork on Polygon network aim to become A Reservation
        Currency Memecoin. Polygon netowrk is a ethereum layer 2 blockchain. To
        start interaction with Polygon, you need get some $MATIC first. In this
        tutorial, we will show you how to purchase CLAM from exchanges or from
        other chains.
      </p>
      <Divider />
      <h3>Purchase $MATIC from Exchange</h3>
      <SubContainer>
        <p>There are many exchanges support Polygon withdraw:</p>
        <ul>
          <ListWithoutDeco>
            <a
              href="https://www.binance.com/zh-TW"
              target="_blank"
              rel="noreferrer"
            >
              Binance
            </a>
          </ListWithoutDeco>
          <ListWithoutDeco>
            <a href="https://crypto.com/" target="_blank" rel="noreferrer">
              Crypto.com
            </a>
          </ListWithoutDeco>
          <ListWithoutDeco>
            <a
              href="https://ascendex.com/zh-tw/global-digital-asset-platform"
              target="_blank"
              rel="noreferrer"
            >
              ASCENDEX
            </a>
          </ListWithoutDeco>
          <ListWithoutDeco>
            <a href="https://www.okx.com/" target="_blank" rel="noreferrer">
              OKeX
            </a>
          </ListWithoutDeco>
          <ListWithoutDeco>
            <a href="https://www.kucoin.com/" target="_blank" rel="noreferrer">
              KuKoin
            </a>
          </ListWithoutDeco>
          <ListWithoutDeco>
            <a
              href="https://www.mexc.com/zh-TW"
              target="_blank"
              rel="noreferrer"
            >
              MEXC
            </a>
          </ListWithoutDeco>
          <ListWithoutDeco>
            <a href="https://www.gate.io/tw" target="_blank" rel="noreferrer">
              Gate.io
            </a>
          </ListWithoutDeco>
        </ul>
        <p>
          You can found more CEXs{' '}
          <a
            href="https://awesomepolygon.com/cex/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
      </SubContainer>
      <h4>Step 1: Buy some $MATIC from CEX listed above</h4>
      <h4>
        Step 2: Go to the page:{' '}
        <a
          href="https://quickswap.exchange/#/swap?outputCurrency=0x4d6A30EFBE2e9D7A9C143Fce1C5Bb30d9312A465"
          target="_blank"
          rel="noreferrer"
        >
          QuickSwap (MATIC -{'>'} CLAM)
        </a>
      </h4>
      <SubContainer>
        <h4>Step 3: Click “Switch to Polygon”</h4>
        <ImageContainer>
          <Image
            src={ImageBuyClamStep3.src}
            width={ImageBuyClamStep3.width}
            height={ImageBuyClamStep3.height}
            layout="responsive"
            alt="step3"
          />
        </ImageContainer>
      </SubContainer>
      <SubContainer>
        <h4>
          Step 4: Add & switch network to Polygon in Metamask or Trust Wallet
        </h4>
        <ImageContainer>
          <Image
            src={ImageBuyClamStep4.src}
            width={ImageBuyClamStep4.width}
            height={ImageBuyClamStep4.height}
            layout="responsive"
            alt="step4"
          />
        </ImageContainer>
      </SubContainer>
      <SubContainer>
        <h4>Step 5: Withdraw $MATIC from one of above CEX to your wallet</h4>
        <p>The wallet address is the same address in Ethereum network.</p>
      </SubContainer>
      <SubContainer>
        <h4>Step 6: Swap some $MATIC to $CLAM</h4>
        <p>
          Attention: Don’t swap all! You should save some matic for future gas
          fee, 0.1~1 MATIC is enough for plenty of transactions.
        </p>
        <ImageContainer>
          <Image
            src={ImageBuyClamStep6.src}
            width={164}
            height={74}
            layout="intrinsic"
            alt="step6"
          />
        </ImageContainer>
      </SubContainer>
      <p>
        Now you have some CLAMs. You can proceed to explore more fun features in
        Otter Kingdom with your CLAMs.
      </p>
      <Divider />
      <h3>Trading for $CLAM from other chains</h3>
      <ol>
        <li>Follow above steps to add Polygon network to your metamask.</li>
        <li>
          Get some $MATIC as GAS fee from matic faucet{' '}
          <a href="https://matic.supply/" target="_blank" rel="noreferrer">
            https://matic.supply/
          </a>{' '}
          or{' '}
          <a
            href="https://macncheese.finance/matic-polygon-mainnet-faucet.php"
            target="_blank"
            rel="noreferrer"
          >
            https://macncheese.finance/matic-polygon-mainnet-faucet.php
          </a>
        </li>
        <li>Bridge your assets to Polygon</li>
      </ol>
      <SubContainer>
        <h4>Ethereum</h4>
        <ul>
          <li>
            Use PoS brdige{' '}
            <a
              href="https://wallet.polygon.technology/bridge"
              target="_blank"
              rel="noreferrer"
            >
              https://wallet.polygon.technology/bridge
            </a>
          </li>
          <li>Use above CEX to bridge your eth/usdc to Polygon</li>
        </ul>
      </SubContainer>
      <SubContainer>
        <h4>BSC</h4>
        <ul>
          <li>The best options is to use Binance as bridge</li>
          <li>
            DeFi bridge:{' '}
            <a
              href="https://bridge.evodefi.com/?token=USDC"
              target="_blank"
              rel="noreferrer"
            >
              https://bridge.evodefi.com/?token=USDC
            </a>
          </li>
        </ul>
      </SubContainer>
      <SubContainer>
        <h4>Solana</h4>
        <ul>
          <li>
            AllBridge:{' '}
            <a href="https://allbridge.io/" target="_blank" rel="noreferrer">
              https://allbridge.io/
            </a>
          </li>
        </ul>
      </SubContainer>
      <SubContainer>
        <h4>Other chains Bridge</h4>
        <ul>
          <li>
            AnySwap:{' '}
            <a href="https://anyswap.exchange/" target="_blank" rel="noreferrer">
              https://anyswap.exchange/
            </a>
          </li>
          <li>
            AllBridge:{' '}
            <a href="https://allbridge.io/" target="_blank" rel="noreferrer">
              https://allbridge.io/
            </a>
          </li>
        </ul>
      </SubContainer>
    </Container>
  );
};
export default BuyClamsView;
