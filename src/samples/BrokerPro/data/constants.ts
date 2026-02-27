export const MOCK_CASES = [
  {
    id: 'RFP-2024-001',
    groupName: 'Meridian Tech Solutions',
    broker: 'Sarah Chen',
    brokerEmail: 's.chen@brokerco.com',
    employees: 245,
    effectiveDate: '2025-01-01',
    state: 'CA',
    industry: 'Technology',
    coverageLines: ['Medical', 'Dental', 'Vision'],
    currentCarrier: 'Anthem Blue Cross',
    status: 'Quoted',
    submittedDate: '2024-10-12',
    premium: 485000,
    notes: 'Client wants PPO options only',
    quotes: [
      { carrier: 'Anthem', amount: 485000, plan: 'PPO 1000' },
      { carrier: 'Kaiser', amount: 461000, plan: 'HMO Select' },
      { carrier: 'Blue Shield', amount: 492000, plan: 'PPO 500' }
    ]
  },
  {
    id: 'RFP-2024-002',
    groupName: 'Harborview Restaurant Group',
    broker: 'James Okafor',
    brokerEmail: 'j.okafor@brokerco.com',
    employees: 89,
    effectiveDate: '2025-02-01',
    state: 'NY',
    industry: 'Hospitality',
    coverageLines: ['Medical', 'Dental'],
    currentCarrier: 'Cigna',
    status: 'Under Review',
    submittedDate: '2024-10-18',
    premium: null,
    notes: 'High turnover – needs flexible enrollment',
    quotes: []
  },
  {
    id: 'RFP-2024-003',
    groupName: 'Clearstone Logistics',
    broker: 'Maria Vasquez',
    brokerEmail: 'm.vasquez@brokerco.com',
    employees: 510,
    effectiveDate: '2025-01-01',
    state: 'TX',
    industry: 'Transportation',
    coverageLines: ['Medical', 'Dental', 'Vision', 'Life'],
    currentCarrier: 'United Healthcare',
    status: 'Bound',
    submittedDate: '2024-09-30',
    premium: 1100000,
    notes: 'Bound with Aetna – close won',
    quotes: [{ carrier: 'Aetna', amount: 1100000, plan: 'PPO 2000' }]
  },
  {
    id: 'RFP-2024-004',
    groupName: 'Summit Education Partners',
    broker: 'Sarah Chen',
    brokerEmail: 's.chen@brokerco.com',
    employees: 132,
    effectiveDate: '2025-03-01',
    state: 'CO',
    industry: 'Education',
    coverageLines: ['Medical', 'Vision'],
    currentCarrier: 'None (new group)',
    status: 'Draft',
    submittedDate: null,
    premium: null,
    notes: 'First-time group – educate on options',
    quotes: []
  },
  {
    id: 'RFP-2024-005',
    groupName: 'Pacific Wellness Clinics',
    broker: 'Derek Moss',
    brokerEmail: 'd.moss@brokerco.com',
    employees: 67,
    effectiveDate: '2024-12-01',
    state: 'WA',
    industry: 'Healthcare',
    coverageLines: ['Medical', 'Dental', 'Vision', 'Life'],
    currentCarrier: 'Regence',
    status: 'Lost',
    submittedDate: '2024-09-15',
    premium: null,
    notes: 'Lost to incumbent – price sensitive',
    quotes: []
  },
  {
    id: 'RFP-2024-006',
    groupName: 'Apex Financial Group',
    broker: 'James Okafor',
    brokerEmail: 'j.okafor@brokerco.com',
    employees: 320,
    effectiveDate: '2025-01-01',
    state: 'IL',
    industry: 'Financial Services',
    coverageLines: ['Medical', 'Dental', 'Vision', 'Life'],
    currentCarrier: 'Humana',
    status: 'Submitted',
    submittedDate: '2024-10-20',
    premium: null,
    notes: 'C-suite wants premium plans',
    quotes: []
  },
  {
    id: 'RFP-2024-007',
    groupName: 'GreenLeaf Farms Co-op',
    broker: 'Maria Vasquez',
    brokerEmail: 'm.vasquez@brokerco.com',
    employees: 44,
    effectiveDate: '2025-02-01',
    state: 'OR',
    industry: 'Agriculture',
    coverageLines: ['Medical'],
    currentCarrier: 'Moda Health',
    status: 'Quoted',
    submittedDate: '2024-10-05',
    premium: 88000,
    notes: 'Seasonal workers consideration',
    quotes: [
      { carrier: 'Moda', amount: 88000, plan: 'Core PPO' },
      { carrier: 'Providence', amount: 91000, plan: 'PPO Plus' }
    ]
  }
];

export const BROKERS = ['Sarah Chen', 'James Okafor', 'Maria Vasquez', 'Derek Moss'];

export const CARRIERS = [
  'Anthem Blue Cross',
  'Kaiser Permanente',
  'Blue Shield',
  'Cigna',
  'Aetna',
  'United Healthcare',
  'Humana',
  'Regence',
  'Moda Health'
];

export const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Financial Services',
  'Transportation',
  'Hospitality',
  'Education',
  'Agriculture',
  'Retail',
  'Manufacturing',
  'Legal'
];

export const STATES = ['CA', 'NY', 'TX', 'CO', 'WA', 'IL', 'OR', 'FL', 'GA', 'OH'];

export const COVERAGE_OPTIONS = ['Medical', 'Dental', 'Vision', 'Life', 'Disability', 'EAP'];

export const STATUS_CONFIG = {
  Draft: { color: '#94a3b8', bg: '#f1f5f9', label: 'Draft' },
  Submitted: { color: '#3b82f6', bg: '#eff6ff', label: 'Submitted' },
  'Under Review': { color: '#f59e0b', bg: '#fffbeb', label: 'Under Review' },
  Quoted: { color: '#8b5cf6', bg: '#f5f3ff', label: 'Quoted' },
  Bound: { color: '#10b981', bg: '#ecfdf5', label: 'Bound' },
  Lost: { color: '#ef4444', bg: '#fef2f2', label: 'Lost' }
};

export const ROLES = { broker: 'Broker', insurer: 'Insurer', admin: 'Admin' };

export const ROLE_USERS = {
  broker: { name: 'Sarah Chen', email: 's.chen@brokerco.com', title: 'Senior Benefits Broker' },
  insurer: { name: 'Alex Rivera', email: 'a.rivera@anthem.com', title: 'Underwriting Manager – Anthem' },
  admin: { name: 'Jordan Kim', email: 'j.kim@brokerpro.com', title: 'Platform Administrator' }
};
