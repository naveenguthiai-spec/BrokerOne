import React from 'react';
import Icon from './Icon';
import { ROLES } from '../data/constants';
import { S } from '../styles';

const NAV_ITEMS = [
  { key: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
  { key: 'cases', icon: 'cases', label: 'RFP Cases' },
  { key: 'analytics', icon: 'chart', label: 'Analytics' },
  { key: 'notifications', icon: 'bell', label: 'Notifications' },
  { key: 'profile', icon: 'user', label: 'My Profile' }
];

const Sidebar = ({ view, setView, authRole, authUser, notifCount, onSignOut }) => (
  <div style={S.sidebar}>
    <div style={S.sidebarLogo}>
      <div style={S.sidebarLogoTitle}>BrokerPro</div>
      <div style={S.sidebarLogoSub}>RFP Management Platform</div>
    </div>

    <nav style={S.sidebarNav}>
      {NAV_ITEMS.map(item => (
        <div key={item.key} onClick={() => setView(item.key)} style={S.navItem(view === item.key)}>
          <Icon name={item.icon} size={16} />
          {item.label}
          {item.key === 'notifications' && notifCount > 0 && (
            <span
              style={{
                marginLeft: 'auto',
                background: '#3b82f6',
                color: '#fff',
                borderRadius: 10,
                fontSize: 11,
                padding: '1px 7px',
                fontWeight: 700
              }}
            >
              {notifCount}
            </span>
          )}
        </div>
      ))}
    </nav>

    <div style={S.sidebarFooter}>
      <div style={{ ...S.navItem(false), gap: 10 }} onClick={onSignOut}>
        <Icon name='logout' size={16} />
        Sign Out
      </div>
      <div
        style={{
          padding: '12px 12px 0',
          fontSize: 11,
          color: '#334155',
          fontFamily: 'system-ui, sans-serif',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.5px'
        }}
      >
        {authUser?.name} · {ROLES[authRole]}
      </div>
    </div>
  </div>
);

export default Sidebar;
