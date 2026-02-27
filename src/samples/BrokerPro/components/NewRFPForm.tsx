import React, { useState } from 'react';
import Icon from './Icon';
import { STATES, INDUSTRIES, CARRIERS, COVERAGE_OPTIONS } from '../data/constants';
import { S } from '../styles';

const NewRFPForm = ({ onClose, onSubmit, user }) => {
  const [form, setForm] = useState({
    groupName: '',
    employees: '',
    state: 'CA',
    industry: 'Technology',
    effectiveDate: '2025-04-01',
    currentCarrier: 'None (new group)',
    coverageLines: ['Medical'],
    notes: '',
    broker: user.name
  });

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const toggleCoverage = line =>
    set('coverageLines', form.coverageLines.includes(line) ? form.coverageLines.filter(l => l !== line) : [...form.coverageLines, line]);

  const handleSubmit = () => {
    if (!form.groupName || !form.employees) {
      alert('Please fill in required fields.');
      return;
    }
    onSubmit({
      ...form,
      employees: parseInt(form.employees),
      id: `RFP-2024-${String(Math.floor(Math.random() * 900) + 100)}`,
      status: 'Submitted',
      submittedDate: new Date().toISOString().split('T')[0],
      premium: null,
      quotes: [],
      brokerEmail: user.email
    });
    onClose();
  };

  return (
    <div
      style={S.modal}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div style={S.modalBox}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div>
            <div style={{ ...S.sectionTitle, marginBottom: 0 }}>Submit New RFP</div>
            <div style={{ fontSize: 13, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>Request for Proposal – Group Health Benefits</div>
          </div>
          <button onClick={onClose} style={{ ...S.btn, ...S.btnSecondary, padding: '8px' }}>
            <Icon name='close' />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ gridColumn: '1/-1' }}>
            <label style={S.label}>Group / Employer Name *</label>
            <input value={form.groupName} onChange={e => set('groupName', e.target.value)} placeholder='e.g. Acme Corporation' style={S.input} />
          </div>

          <div>
            <label style={S.label}>Number of Employees *</label>
            <input type='number' value={form.employees} onChange={e => set('employees', e.target.value)} placeholder='e.g. 150' style={S.input} />
          </div>

          <div>
            <label style={S.label}>State</label>
            <select value={form.state} onChange={e => set('state', e.target.value)} style={S.input}>
              {STATES.map(s => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={S.label}>Industry</label>
            <select value={form.industry} onChange={e => set('industry', e.target.value)} style={S.input}>
              {INDUSTRIES.map(i => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={S.label}>Effective Date</label>
            <input type='date' value={form.effectiveDate} onChange={e => set('effectiveDate', e.target.value)} style={S.input} />
          </div>

          <div style={{ gridColumn: '1/-1' }}>
            <label style={S.label}>Current Carrier</label>
            <select value={form.currentCarrier} onChange={e => set('currentCarrier', e.target.value)} style={S.input}>
              <option>None (new group)</option>
              {CARRIERS.map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div style={{ gridColumn: '1/-1' }}>
            <label style={S.label}>Lines of Coverage</label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {COVERAGE_OPTIONS.map(l => (
                <div
                  key={l}
                  onClick={() => toggleCoverage(l)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: `2px solid ${form.coverageLines.includes(l) ? '#1e3a5f' : '#e2e8f0'}`,
                    background: form.coverageLines.includes(l) ? '#eff6ff' : '#fff',
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: 'system-ui, sans-serif',
                    color: form.coverageLines.includes(l) ? '#1e3a5f' : '#64748b'
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: '1/-1' }}>
            <label style={S.label}>Notes / Special Instructions</label>
            <textarea
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              rows={3}
              placeholder='Any special considerations, plan preferences, or notes for the underwriting team...'
              style={{ ...S.input, resize: 'vertical' as const }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ ...S.btn, ...S.btnSecondary }}>
            Cancel
          </button>
          <button onClick={handleSubmit} style={{ ...S.btn, ...S.btnPrimary }}>
            Submit RFP <Icon name='arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRFPForm;
