import { Route, Routes } from 'react-router';

import Embedded from '../Embedded';
import FullPortal from '../FullPortal';
import BrokerPro from '../BrokerPro';
import AppSwitcherLanding from './AppSwitcherLanding';

// NOTE: You should update this to be the same value that's in
//  the src/index.html <base href="value"> to allow the React Router
//  to identify the paths correctly.
const baseURL = '/';

const AppSelector = () => {
  return (
    <div>
      <Routes>
        {/* App Switcher Landing – main entry point */}
        <Route path={`${baseURL}`} element={<AppSwitcherLanding />} />
        <Route path={`${baseURL}index.html`} element={<AppSwitcherLanding />} />

        {/* MediaCo Embedded App */}
        <Route path={`${baseURL}embedded`} element={<Embedded />} />
        <Route path={`${baseURL}embedded.html`} element={<Embedded />} />

        {/* BrokerPro App */}
        <Route path={`${baseURL}brokerpro`} element={<BrokerPro />} />
        <Route path={`${baseURL}brokerpro.html`} element={<BrokerPro />} />

        {/* Full Portal */}
        <Route path={`${baseURL}portal`} element={<FullPortal />} />
        <Route path={`${baseURL}portal.html`} element={<FullPortal />} />

        {/* Fallback to landing */}
        <Route path='*' element={<AppSwitcherLanding />} />
      </Routes>
    </div>
  );
};

export default AppSelector;
