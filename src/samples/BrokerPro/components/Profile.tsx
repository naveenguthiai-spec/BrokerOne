import React from 'react';
import { ROLES } from '../data/constants';
import { S } from '../styles';

const CARRIERS_LIST = ['Anthem Blue Cross', 'Kaiser Permanente', 'Blue Shield', 'Cigna', 'Aetna'];

const Profile = ({ user, role }) => (
  <div>
    <div style={S.sectionTitle}>My Profile</div>
    <div style={S.sectionSub}>Account information and carrier appointments</div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 20 }}>
      {/* Info Card */}
      <div style={S.card}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: '#1e3a5f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 700,
            color: '#fff',
            marginBottom: 16
          }}
        >
          {user.name
            .split(' ')
            .map(n => n[0])
            .join('')}
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Crimson Pro', Georgia, serif" }}>{user.name}</div>
        <div style={{ fontSize: 13, color: '#64748b', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>{user.title}</div>
        <div style={{ fontSize: 13, color: '#3b82f6', fontFamily: 'system-ui, sans-serif', marginTop: 8 }}>{user.email}</div>
        <div
          style={{
            marginTop: 16,
            padding: '10px 14px',
            background: '#f8f9fc',
            borderRadius: 8,
            fontSize: 12,
            fontFamily: 'system-ui, sans-serif',
            color: '#475569'
          }}
        >
          <div>
            <strong>Role:</strong> {ROLES[role]}
          </div>
          <div style={{ marginTop: 4 }}>
            <strong>License #:</strong> CA-7829-BRK
          </div>
          <div style={{ marginTop: 4 }}>
            <strong>NPN:</strong> 14829374
          </div>
        </div>
      </div>

      {/* Carrier Appointments */}
      {role === 'broker' && (
        <div style={S.card}>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>Carrier Appointments</div>
          {CARRIERS_LIST.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
              <div style={{ flex: 1, fontSize: 14, fontFamily: 'system-ui, sans-serif' }}>{a}</div>
              <span
                style={{
                  fontSize: 11,
                  background: '#dcfce7',
                  color: '#16a34a',
                  padding: '2px 8px',
                  borderRadius: 10,
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                Active
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Profile;
