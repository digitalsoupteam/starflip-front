import { WagmiProvider } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Routes, Route } from 'react-router-dom';

import { Footer, Header } from './components/layout';
import Home from './pages/Home.tsx';
import Dice from './pages/Dice.tsx';

import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: '6872ab944b4959f13cd347e4dfbb6680',
  chains: [baseSepolia],
  ssr: true,
});

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className={'root-layout'}>
            <Header />
            <main>
              <Routes>
                <Route path='/' element={<Home />} />
                {/*<Route path='/dice' element={<Dice />} />*/}
              </Routes>
            </main>
            <Footer />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
