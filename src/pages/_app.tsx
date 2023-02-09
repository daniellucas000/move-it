import type { AppProps } from 'next/app';
import { ChallengesProvider } from '../contexts/ChallengesContexts';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp;
