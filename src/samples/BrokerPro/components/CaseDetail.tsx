import React, { useState } from 'react';
import Icon from './Icon';
import { STATUS_CONFIG } from '../data/constants';
import { fmtDate, StatusBadge } from '../utils/helpers';
import { S } from '../styles';

const CaseDetail = ({ c, onClose, role, onStatusChange }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = ['overview', 'quotes', 'documents', 'activity'];

  const activityLog = [
    { date: 'Oct 20, 2024', event: 'Case submitted to carriers', user: c.broker },
    { date: 'Oct 18, 2024', event: 'Census file uploaded', user: c.broker },
    { date: 'Oct 15, 2024', event: 'Draft created', user: c.broker },
    ...(c.quotes.length ? [{ date: 'Oct 22, 2024', event: `${c.quotes.length} quote(s) received`, user: 'System' }] : [])
  ];

  return (
    <div
      style={S.modal}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div style={S.modalBox}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'monospace', marginBottom: 4 }}>{c.id}</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', fontFamily: "'Crimson Pro', Georgia, serif" }}>{c.groupName}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
              <StatusBadge status={c.status} />
              <span style={{ fontSize: 13, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                {c.employees} employees · {c.state} · {c.industry}
              </span>
            </div>
          </div>
          <button onClick={onClose} style={{ ...S.btn, ...S.btnSecondary, padding: '8px' }}>
            <Icon name='close' />
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #e2e8f0', marginBottom: 24 }}>
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                ...S.btn,
                padding: '10px 20px',
                borderRadius: 0,
                background: 'transparent',
                color: activeTab === t ? '#1e3a5f' : '#94a3b8',
                borderBottom: activeTab === t ? '2px solid #1e3a5f' : '2px solid transparent',
                marginBottom: -1,
                textTransform: 'capitalize' as const,
                fontSize: 13
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={S.label}>Group Name</div>
                <div style={{ fontSize: 15, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>{c.groupName}</div>
                <div style={S.label}>Current Carrier</div>
                <div style={{ fontSize: 15, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>{c.currentCarrier}</div>
                <div style={S.label}>Broker</div>
                <div style={{ fontSize: 15, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>
                  {c.broker} · <span style={{ color: '#3b82f6' }}>{c.brokerEmail}</span>
                </div>
                <div style={S.label}>Lines of Coverage</div>
                <div style={{ marginBottom: 16 }}>
                  {c.coverageLines.map(l => (
                    <span key={l} style={S.tag}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={S.label}>Effective Date</div>
                <div style={{ fontSize: 15, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>{fmtDate(c.effectiveDate)}</div>
                <div style={S.label}>Submitted Date</div>
                <div style={{ fontSize: 15, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>{fmtDate(c.submittedDate)}</div>
                <div style={S.label}>State</div>
                <div style={{ fontSize: 15, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>{c.state}</div>
                <div style={S.label}>Notes</div>
                <div
                  style={{
                    fontSize: 14,
                    fontFamily: 'system-ui, sans-serif',
                    color: '#475569',
                    background: '#f8f9fc',
                    borderRadius: 8,
                    padding: '10px 14px'
                  }}
                >
                  {c.notes || '---'}
                </div>
              </div>
            </div>

            {(role === 'insurer' || role === 'admin') && c.status !== 'Bound' && c.status !== 'Lost' && (
              <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
                {['Under Review', 'Quoted', 'Bound', 'Lost']
                  .filter(s => s !== c.status)
                  .map(s => (
                    <button
                      key={s}
                      onClick={() => onStatusChange(c.id, s)}
                      style={{
                        ...S.btn,
                        background: STATUS_CONFIG[s].bg,
                        color: STATUS_CONFIG[s].color,
                        border: `1px solid ${STATUS_CONFIG[s].color}40`
                      }}
                    >
                      Set: {s}
                    </button>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Quotes Tab */}
        {activeTab === 'quotes' && (
          <div>
            {c.quotes.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#94a3b8', padding: 40, fontFamily: 'system-ui, sans-serif' }}>No quotes received yet</div>
            ) : (
              <table style={S.table}>
                <thead>
                  <tr>
                    <th style={S.th}>Carrier</th>
                    <th style={S.th}>Plan</th>
                    <th style={S.th}>Annual Premium</th>
                    <th style={S.th}>PEPM</th>
                    <th style={S.th}></th>
                  </tr>
                </thead>
                <tbody>
                  {c.quotes
                    .sort((a, b) => a.amount - b.amount)
                    .map((q, i) => (
                      <tr key={i} style={{ background: i === 0 ? '#f0fdf4' : 'transparent' }}>
                        <td style={{ ...S.td, fontWeight: 600 }}>{q.carrier}</td>
                        <td style={S.td}>{q.plan}</td>
                        <td style={{ ...S.td, fontWeight: 700, color: i === 0 ? '#10b981' : '#1e293b' }}>${q.amount.toLocaleString()}</td>
                        <td style={S.td}>${Math.round(q.amount / c.employees / 12).toLocaleString()}/mo</td>
                        <td style={S.td}>
                          {i === 0 && (
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
                              Lowest
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div>
            {[
              { name: 'Employee Census.xlsx', size: '84 KB', date: 'Oct 18, 2024' },
              { name: 'Current SBC - Cigna.pdf', size: '1.2 MB', date: 'Oct 18, 2024' },
              { name: 'Prior Year Invoice.pdf', size: '220 KB', date: 'Oct 16, 2024' }
            ].map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: '1px solid #f1f5f9' }}>
                <Icon name='doc' size={20} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}>{d.name}</div>
                  <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: 'system-ui, sans-serif' }}>
                    {d.size} · Uploaded {d.date}
                  </div>
                </div>
                <button style={{ ...S.btn, ...S.btnSecondary, fontSize: 12, padding: '6px 12px' }}>Download</button>
              </div>
            ))}
            <button style={{ ...S.btn, ...S.btnSecondary, marginTop: 16 }}>+ Upload Document</button>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div>
            {activityLog.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid #f1f5f9' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#eff6ff',
                    border: '2px solid #3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon name='check' size={14} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontFamily: 'system-ui, sans-serif', fontWeight: 500 }}>{a.event}</div>
                  <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: 'system-ui, sans-serif', marginTop: 2 }}>
                    {a.date} · {a.user}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseDetail;
