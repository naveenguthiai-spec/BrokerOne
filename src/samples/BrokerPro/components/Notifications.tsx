import React from 'react';
import { S } from '../styles';

const NOTIFS = [
  { type: 'quote', msg: '3 new quotes received for Meridian Tech Solutions', time: '2h ago', unread: true },
  { type: 'status', msg: 'Clearstone Logistics has been bound – congratulations!', time: '1d ago', unread: true },
  { type: 'deadline', msg: 'Apex Financial Group RFP: 5 days until effective date window', time: '2d ago', unread: false },
  { type: 'status', msg: 'Harborview Restaurant Group is now Under Review', time: '3d ago', unread: false },
  { type: 'deadline', msg: 'GreenLeaf Farms: open enrollment deadline approaching', time: '4d ago', unread: false }
];

const Notifications = () => (
  <div>
    <div style={S.sectionTitle}>Notifications</div>
    <div style={S.sectionSub}>Alerts, quote updates, and deadline reminders</div>
    <div style={S.card}>
      {NOTIFS.map((n, i) => (
        <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid #f1f5f9', opacity: n.unread ? 1 : 0.6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: n.unread ? '#3b82f6' : 'transparent', marginTop: 6, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontFamily: 'system-ui, sans-serif', fontWeight: n.unread ? 600 : 400 }}>{n.msg}</div>
            <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>{n.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Notifications;
