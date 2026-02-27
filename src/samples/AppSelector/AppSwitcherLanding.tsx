import { useNavigate } from 'react-router';

const AppSwitcherLanding = () => {
  const navigate = useNavigate();

  const apps = [
    {
      id: 'embedded',
      name: 'MediaCo Store',
      subtitle: 'Phone Purchase Portal',
      description:
        'Browse and purchase the latest Oceonix smartphones. Select a plan and complete your purchase through the Pega-powered checkout workflow.',
      icon: '📱',
      accentColor: '#6366f1',
      bgGradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      ctaLabel: 'Open MediaCo',
      route: '/embedded'
    },
    {
      id: 'brokerpro',
      name: 'BrokerPro',
      subtitle: 'RFP Management Platform',
      description:
        'Manage health insurance RFP cases, track your book of business, and submit new RFPs directly through the Pega case creation workflow.',
      icon: '🏢',
      accentColor: '#1e3a5f',
      bgGradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
      ctaLabel: 'Open BrokerPro',
      route: '/brokerpro'
    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        padding: '40px 24px'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(99,102,241,0.15)',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: 40,
            padding: '6px 20px',
            marginBottom: 24,
            fontSize: 13,
            color: '#a5b4fc',
            letterSpacing: '0.5px',
            textTransform: 'uppercase' as const,
            fontWeight: 600
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
          Pega React SDK · Integrated Apps
        </div>
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: '#f8fafc',
            margin: '0 0 16px',
            letterSpacing: '-1.5px',
            lineHeight: 1.1
          }}
        >
          Choose Your Application
        </h1>
        <p
          style={{
            fontSize: 18,
            color: '#94a3b8',
            margin: 0,
            maxWidth: 520
          }}
        >
          Both applications are powered by the Pega Mashup API for seamless case creation and workflow management.
        </p>
      </div>

      {/* App Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 28,
          width: '100%',
          maxWidth: 820
        }}
      >
        {apps.map(app => (
          <div
            key={app.id}
            onClick={() => navigate(app.route)}
            style={{
              background: '#1e293b',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 48px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
            }}
          >
            {/* Card accent bar */}
            <div
              style={{
                height: 6,
                background: app.bgGradient
              }}
            />
            {/* Card body */}
            <div style={{ padding: 32 }}>
              {/* Icon & title */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: app.bgGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 26,
                    flexShrink: 0
                  }}
                >
                  {app.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#f8fafc',
                      letterSpacing: '-0.5px',
                      marginBottom: 4
                    }}
                  >
                    {app.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#64748b',
                      textTransform: 'uppercase' as const,
                      letterSpacing: '0.5px',
                      fontWeight: 600
                    }}
                  >
                    {app.subtitle}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  margin: '0 0 28px'
                }}
              >
                {app.description}
              </p>

              {/* Pega badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: 6,
                    padding: '4px 10px',
                    fontSize: 12,
                    color: '#a5b4fc',
                    fontWeight: 500
                  }}
                >
                  <span>⚡</span> Pega createCase Integrated
                </div>
              </div>

              {/* CTA Button */}
              <button
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 10,
                  border: 'none',
                  background: app.bgGradient,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8
                }}
              >
                {app.ctaLabel} →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div
        style={{
          marginTop: 48,
          fontSize: 13,
          color: '#475569',
          textAlign: 'center'
        }}
      >
        Powered by Pega Mashup API · React SDK
      </div>
    </div>
  );
};

export default AppSwitcherLanding;
