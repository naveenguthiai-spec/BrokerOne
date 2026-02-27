import PegaAuthProvider from '../Embedded/context/PegaAuthProvider';
import { PegaReadyProvider } from '../Embedded/context/PegaReadyContext';
import { theme } from '../../theme';
import BrokerProApp from './BrokerProApp';

export default function BrokerPro() {
  return (
    <PegaAuthProvider>
      <PegaReadyProvider theme={theme}>
        <BrokerProApp />
      </PegaReadyProvider>
    </PegaAuthProvider>
  );
}
