import React from 'react';
import { Activity, BarChart3, Users, Zap } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'ATTENDEES', value: '42,903', trend: '+12%', color: 'var(--tron-cyan)' },
    { label: 'STADIUM LOAD', value: '84%', trend: 'OPTIMAL', color: 'var(--tron-cyan)' },
    { label: 'ENERGY GRID', value: '0.98GW', trend: 'STABLE', color: 'var(--tron-cyan)' },
    { label: 'AI COGNITION', value: '99.9%', trend: 'ACTIVE', color: 'var(--tron-cyan)' },
  ];

  return (
    <div className="dashboard-container">
      <header style={{ marginBottom: '2rem' }}>
        <h2 className="text-mono text-cyan glow-text" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>TERMINAL: SENTINEL_DASHBOARD_v4.0</h2>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '0.5rem' }}>Ecosystem Status</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {stats.map((stat) => (
          <div key={stat.label} className="glass-panel" style={{ padding: '1.5rem' }}>
            <p className="text-mono" style={{ fontSize: '0.7rem', opacity: 0.6, marginBottom: '0.5rem' }}>{stat.label}</p>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: stat.color }}>{stat.value}</h3>
            <p className="text-mono" style={{ fontSize: '0.6rem', color: 'var(--tron-cyan)', marginTop: '0.5rem', opacity: 0.8 }}>
              STATUS: {stat.trend}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', minHeight: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 className="text-mono" style={{ fontSize: '1rem', letterSpacing: '1px' }}>FLOW_VELOCITY_MATRIX</h3>
            <Activity className="text-cyan" size={20} />
          </div>
          <div style={{ height: '200px', width: '100%', position: 'relative', background: 'radial-gradient(circle at center, var(--tron-cyan-dim) 0%, transparent 70%)' }}>
            {/* Simulated Data Visualization */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    flexGrow: 1, 
                    background: 'var(--tron-cyan)', 
                    height: `${Math.random() * 80 + 20}%`,
                    opacity: 0.3 + (i / 30) * 0.7,
                    boxShadow: '0 0 10px var(--tron-cyan-glow)'
                  }} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 className="text-mono" style={{ fontSize: '1rem', letterSpacing: '1px', marginBottom: '2rem' }}>NETWORK_SECURITY</h3>
          <div style={{ spaceY: '1rem' }}>
            {[1, 2, 3].map((v) => (
              <div key={v} style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="text-mono" style={{ fontSize: '0.7rem' }}>ENCRYPTION_NODE_{v}</span>
                  <span className="text-mono" style={{ fontSize: '0.7rem' }}>{95 + v}%</span>
                </div>
                <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                  <div style={{ height: '100%', width: `${95 + v}%`, background: 'var(--tron-cyan)', boxShadow: '0 0 5px var(--tron-cyan)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
