import PegaAuthProvider from './context/PegaAuthProvider';
import { PegaReadyProvider } from './context/PegaReadyContext';
import { useNavigate } from 'react-router';

import Header from './Header';
import MainScreen from './MainScreen';
import { theme } from '../../theme';
import './styles.css';

function BackToAppsBar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: '#1e293b',
        padding: '6px 24px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 6,
          padding: '4px 12px',
          cursor: 'pointer',
          fontSize: 12,
          color: '#94a3b8',
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }}
      >
        ← App Switcher
      </button>
    </div>
  );
}

export default function Embedded() {
  return (
    <PegaAuthProvider>
      <PegaReadyProvider theme={theme}>
        <>
          <BackToAppsBar />
          <Header />
          <MainScreen />
        </>
      </PegaReadyProvider>
    </PegaAuthProvider>
  );
}
