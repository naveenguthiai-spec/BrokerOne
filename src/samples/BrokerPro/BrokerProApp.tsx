import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MOCK_CASES } from './data/constants';
import { S } from './styles';
import LoginScreen from './components/LoginScreen';
import Sidebar from './components/Sidebar';
import KpiCards from './components/KpiCards';
import PipelineBar from './components/PipelineBar';
import CaseTable from './components/CaseTable';
import CaseDetail from './components/CaseDetail';
import Analytics from './components/Analytics';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Icon from './components/Icon';
import { usePega } from '../Embedded/context/PegaReadyContext';
import { getSdkConfig } from '@pega/auth/lib/sdk-auth-manager';

const VIEW_LABELS: Record<string, string> = {
  dashboard: 'Dashboard',
  cases: 'RFP Cases',
  analytics: 'Analytics',
  notifications: 'Notifications',
  profile: 'My Profile'
};

export default function BrokerProApp() {
  const { isPegaReady, PegaContainer, createCase } = usePega();
  const navigate = useNavigate();

  const [authRole, setAuthRole] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<any>(null);
  const [view, setView] = useState('dashboard');
  const [cases, setCases] = useState<any[]>(MOCK_CASES);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [notifCount] = useState(2);

  // Pega state
  const [showPega, setShowPega] = useState(false);

  // Load Google Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Subscribe to Pega events
  useEffect(() => {
    if (!isPegaReady) return;

    PCore.getPubSubUtils().subscribe(PCore.getConstants().PUB_SUB_EVENTS.EVENT_CANCEL, () => setShowPega(false), 'brokerProCancelAssignment');

    PCore.getPubSubUtils().subscribe(
      PCore.getConstants().PUB_SUB_EVENTS.CASE_EVENTS.END_OF_ASSIGNMENT_PROCESSING,
      () => {
        setShowPega(false);
        // Optionally show a success message
      },
      'brokerProEndOfAssignment'
    );

    return () => {
      PCore.getPubSubUtils().unsubscribe(PCore.getConstants().PUB_SUB_EVENTS.EVENT_CANCEL, 'brokerProCancelAssignment');
      PCore.getPubSubUtils().unsubscribe(PCore.getConstants().PUB_SUB_EVENTS.CASE_EVENTS.END_OF_ASSIGNMENT_PROCESSING, 'brokerProEndOfAssignment');
    };
  }, [isPegaReady]);

  const handleNewRFP = async () => {
    if (!isPegaReady) {
      console.warn('Pega not ready yet');
      return;
    }

    const sdkConfig = await getSdkConfig();
    const mashupCaseType = sdkConfig.serverConfig.appMashupCaseType;
        setShowPega(true);


    let selectedPhoneGUID = '2455b75e-3381-4a34-b7db-700dba34a670';;

    // Create options object with default values
    const options: {
      pageName: string;
      startingFields: { [key: string]: any };
    } = {
      pageName: 'pyEmbedAssignment',
      startingFields: {}
    };
    if (mashupCaseType === 'DIXL-MediaCo-Work-PurchasePhone') {
      options.startingFields['PhoneModelss'] = {
        pyGUID: selectedPhoneGUID
      };
    } else {
      console.warn(`Unexpected case type: ${mashupCaseType}. PhoneModelss field not set.`);
    }

    // Call the createCase function from context to create a new case using the mashup API
    createCase(mashupCaseType, options).then(() => {
      console.log('createCase rendering is complete');
    });


    /*const sdkConfig = await getSdkConfig();
    const mashupCaseType = sdkConfig.serverConfig.appMashupCaseType;
    setShowPega(true);
    createCase(mashupCaseType, {
      pageName: 'pyEmbedAssignment',
      startingFields: {}
    }).then(() => {
      console.log('BrokerPro: createCase rendering complete');
    });*/
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setCases(prev => prev.map(c => (c.id === id ? { ...c, status: newStatus } : c)));
    if (selectedCase?.id === id) setSelectedCase((prev: any) => ({ ...prev, status: newStatus }));
  };

  if (!authRole) {
    return (
      <LoginScreen
        onLogin={(role: string, user: any) => {
          setAuthRole(role);
          setAuthUser(user);
        }}
      />
    );
  }

  const brokerCases = authRole === 'broker' ? cases.filter(c => c.broker === authUser.name) : cases;

  return (
    <div style={S.app}>
      {/* Sidebar */}
      <Sidebar
        view={view}
        setView={setView}
        authRole={authRole}
        authUser={authUser}
        notifCount={notifCount}
        onSignOut={() => {
          setAuthRole(null);
          setAuthUser(null);
        }}
      />

      {/* Main area */}
      <div style={S.main}>
        {/* Topbar */}
        <div style={S.topbar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              onClick={() => navigate('/')}
              style={{
                background: 'none',
                border: '1px solid #e2e8f0',
                borderRadius: 6,
                padding: '5px 12px',
                cursor: 'pointer',
                fontSize: 12,
                color: '#64748b',
                fontFamily: 'system-ui, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: 4
              }}
            >
              ← Apps
            </button>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#0f172a',
                fontFamily: "'Crimson Pro', Georgia, serif",
                textTransform: 'capitalize' as const
              }}
            >
              {VIEW_LABELS[view] || view}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {authRole === 'broker' && (view === 'dashboard' || view === 'cases') && (
              <button onClick={handleNewRFP} style={{ ...S.btn, ...S.btnPrimary }}>
                <Icon name='plus' size={15} /> New RFP
              </button>
            )}
          </div>
        </div>

        {/* Pega overlay for New RFP */}
        {showPega && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15,23,42,0.7)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)'
            }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                width: '90%',
                maxWidth: 900,
                maxHeight: '90vh',
                overflow: 'auto',
                boxShadow: '0 25px 60px rgba(0,0,0,0.3)'
              }}
            >
              {/* Modal header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 28px',
                  borderBottom: '1px solid #e2e8f0'
                }}
              >
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', fontFamily: "'Crimson Pro', Georgia, serif" }}>
                    New RFP – Pega Workflow
                  </div>
                  <div style={{ fontSize: 13, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                    Complete the form below to submit your RFP via Pega
                  </div>
                </div>
                <button
                  onClick={() => setShowPega(false)}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: 18,
                    color: '#64748b',
                    lineHeight: 1
                  }}
                >
                  ✕
                </button>
              </div>
              {/* Pega content */}
              <div style={{ padding: 28 }}>
                <PegaContainer />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div style={S.content}>
          {view === 'dashboard' && (
            <div>
              <div style={S.sectionTitle}>Welcome back, {authUser.name.split(' ')[0]}</div>
              <div style={S.sectionSub}>Here's your book of business at a glance.</div>
              <KpiCards cases={brokerCases} />
              <PipelineBar cases={brokerCases} />
              <CaseTable cases={brokerCases} onSelect={setSelectedCase} role={authRole} />
            </div>
          )}
          {view === 'cases' && (
            <div>
              <div style={S.sectionTitle}>All RFP Cases</div>
              <div style={S.sectionSub}>{brokerCases.length} total cases in your book of business</div>
              <CaseTable cases={brokerCases} onSelect={setSelectedCase} role={authRole} />
            </div>
          )}
          {view === 'analytics' && <Analytics cases={brokerCases} />}
          {view === 'notifications' && <Notifications />}
          {view === 'profile' && <Profile user={authUser} role={authRole} />}
        </div>
      </div>

      {/* Case detail modal */}
      {selectedCase && <CaseDetail c={selectedCase} onClose={() => setSelectedCase(null)} role={authRole} onStatusChange={handleStatusChange} />}
    </div>
  );
}
