import React, { useState } from 'react';
import { ROLES, ROLE_USERS } from '../data/constants';
import { S } from '../styles';

const LoginScreen = ({ onLogin }) => {
  const [role, setRole] = useState('broker');
  const [email, setEmail] = useState('s.chen@brokerco.com');
  const [password, setPassword] = useState('password');

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Crimson Pro', Georgia, serif"
      }}
    >
      <div
        style={{
          width: 440,
          background: '#fff',
          borderRadius: 20,
          padding: 48,
          boxShadow: '0 40px 80px rgba(0,0,0,0.4)'
        }}
      >
        <div style={{ marginBottom: 36, textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.5px' }}>BrokerPro</div>
          <div style={{ fontSize: 13, color: '#64748b', marginTop: 4, fontFamily: 'system-ui, sans-serif' }}>
            Health Insurance RFP Management Platform
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={S.label}>Sign in as</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {Object.entries(ROLES).map(([key, label]) => (
              <div
                key={key}
                onClick={() => {
                  setRole(key);
                  setEmail(ROLE_USERS[key].email);
                }}
                style={{
                  padding: '10px 8px',
                  borderRadius: 8,
                  border: `2px solid ${role === key ? '#1e3a5f' : '#e2e8f0'}`,
                  cursor: 'pointer',
                  textAlign: 'center',
                  background: role === key ? '#f0f4ff' : '#fff',
                  transition: 'all 0.15s'
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: role === key ? '#1e3a5f' : '#64748b',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: '#f8f9fc',
            borderRadius: 10,
            padding: '12px 16px',
            marginBottom: 20,
            fontSize: 13,
            color: '#475569',
            fontFamily: 'system-ui, sans-serif'
          }}
        >
          <strong>{ROLE_USERS[role].name}</strong> · {ROLE_USERS[role].title}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={S.label}>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} style={S.input} />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={S.label}>Password</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} style={S.input} />
        </div>

        <button
          onClick={() => onLogin(role, ROLE_USERS[role])}
          style={{
            ...S.btn,
            ...S.btnPrimary,
            width: '100%',
            justifyContent: 'center',
            padding: '14px',
            fontSize: 15,
            borderRadius: 10
          }}
        >
          Sign In to BrokerPro
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
