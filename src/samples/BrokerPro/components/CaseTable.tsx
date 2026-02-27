import React, { useState } from 'react';
import Icon from './Icon';
import { STATUS_CONFIG } from '../data/constants';
import { fmtDollar, fmtDate, StatusBadge } from '../utils/helpers';
import { S } from '../styles';

const CaseTable = ({ cases, onSelect, role }) => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filtered = cases.filter(c => {
    const matchSearch =
      c.groupName.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.broker.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'All' || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div style={S.card}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#1e293b', fontFamily: 'system-ui, sans-serif' }}>RFP Cases</div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
              <Icon name='search' size={14} />
            </span>
            <input
              placeholder='Search cases...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ ...S.input, width: 200, paddingLeft: 32, fontSize: 13 }}
            />
          </div>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ ...S.input, width: 140 }}>
            <option>All</option>
            {Object.keys(STATUS_CONFIG).map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <table style={S.table}>
        <thead>
          <tr>
            <th style={S.th}>Case ID</th>
            <th style={S.th}>Group Name</th>
            {role !== 'broker' && <th style={S.th}>Broker</th>}
            <th style={S.th}>Employees</th>
            <th style={S.th}>Coverage</th>
            <th style={S.th}>Eff. Date</th>
            <th style={S.th}>Status</th>
            <th style={S.th}>Premium</th>
            <th style={S.th}></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(c => (
            <tr
              key={c.id}
              style={{ cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f8f9fc')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <td style={{ ...S.td, fontFamily: 'monospace', fontSize: 12, color: '#3b82f6' }}>{c.id}</td>
              <td style={{ ...S.td, fontWeight: 600, color: '#1e293b' }}>{c.groupName}</td>
              {role !== 'broker' && <td style={S.td}>{c.broker}</td>}
              <td style={S.td}>{c.employees.toLocaleString()}</td>
              <td style={S.td}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {c.coverageLines.slice(0, 2).map(l => (
                    <span key={l} style={S.tag}>
                      {l}
                    </span>
                  ))}
                  {c.coverageLines.length > 2 && <span style={S.tag}>+{c.coverageLines.length - 2}</span>}
                </div>
              </td>
              <td style={S.td}>{fmtDate(c.effectiveDate)}</td>
              <td style={S.td}>
                <StatusBadge status={c.status} />
              </td>
              <td style={{ ...S.td, fontWeight: 600 }}>{fmtDollar(c.premium)}</td>
              <td style={S.td}>
                <button onClick={() => onSelect(c)} style={{ ...S.btn, ...S.btnSecondary, padding: '6px 12px', fontSize: 12 }}>
                  View <Icon name='arrow' size={12} />
                </button>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={9} style={{ ...S.td, textAlign: 'center', color: '#94a3b8', padding: 40 }}>
                No cases found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CaseTable;
