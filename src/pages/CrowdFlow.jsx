import React from 'react';
import { Users, AlertTriangle, ArrowRight } from 'lucide-react';

const CrowdFlow = () => {
  return (
    <div className="crowd-flow-container">
      <header style={{ marginBottom: '2rem' }}>
        <h2 className="text-mono text-cyan glow-text" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>MODULE: CROWD_CHOREOGRAPHY_x8</h2>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '0.5rem' }}>Flow Dynamics</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          <h3 className="text-mono" style={{ fontSize: '1rem', letterSpacing: '1px', marginBottom: '1.5rem' }}>REAL-TIME_HEATMAP</h3>
          <div style={{ 
            flexGrow: 1, 
            background: 'rgba(0,0,0,0.3)', 
            border: '1px solid var(--tron-cyan-dim)', 
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Stadium Grid Simulation */}
            <div style={{ 
              position: 'absolute', 
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(10, 1fr)',
              gridTemplateRows: 'repeat(10, 1fr)',
              opacity: 0.2
            }}>
              {[...Array(100)].map((_, i) => (
                <div key={i} style={{ border: '0.1px solid var(--tron-cyan)', background: Math.random() > 0.8 ? 'var(--tron-cyan-dim)' : 'transparent' }} />
              ))}
            </div>
            
            {/* Heatmap Nodes */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, var(--tron-cyan-glow) 0%, transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                  animation: `pulseGlow 3s infinite ${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="text-mono" style={{ fontSize: '1rem', letterSpacing: '1px', marginBottom: '1rem' }}>CONGESTION_ALERTS</h3>
            <div style={{ background: 'rgba(255, 77, 0, 0.1)', border: '1px solid var(--tron-alert)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <AlertTriangle color="var(--tron-alert)" />
              <div>
                <p className="text-mono" style={{ fontSize: '0.8rem', color: 'var(--tron-alert)' }}>SECTOR_7B: SLOW_FLOW</p>
                <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>Recommended reroute to Gate D via holographic pathing.</p>
              </div>
            </div>
            <button className="text-mono" style={{ 
              width: '100%', 
              padding: '1rem', 
              background: 'var(--tron-cyan-dim)', 
              border: '1px solid var(--tron-cyan)', 
              color: 'var(--tron-cyan)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              DEPLOY_FLOW_DRONES <ArrowRight size={16} />
            </button>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', flexGrow: 1 }}>
            <h3 className="text-mono" style={{ fontSize: '1rem', letterSpacing: '1px', marginBottom: '1.5rem' }}>SECTOR_METRICS</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--tron-cyan-dim)', textAlign: 'left' }}>
                  <th className="text-mono" style={{ padding: '0.5rem', fontSize: '0.7rem', opacity: 0.6 }}>ZONE</th>
                  <th className="text-mono" style={{ padding: '0.5rem', fontSize: '0.7rem', opacity: 0.6 }}>LOAD</th>
                  <th className="text-mono" style={{ padding: '0.5rem', fontSize: '0.7rem', opacity: 0.6 }}>FLOW</th>
                </tr>
              </thead>
              <tbody>
                {['NORTH_A', 'SOUTH_B', 'EAST_C', 'WEST_D'].map((zone, i) => (
                  <tr key={zone} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="text-mono" style={{ padding: '1rem 0.5rem', fontSize: '0.8rem' }}>{zone}</td>
                    <td style={{ padding: '1rem 0.5rem' }}>
                      <div style={{ height: '4px', width: '60px', background: 'rgba(255,255,255,0.1)' }}>
                        <div style={{ height: '100%', width: `${Math.random() * 60 + 20}%`, background: 'var(--tron-cyan)' }}></div>
                      </div>
                    </td>
                    <td className="text-mono" style={{ padding: '1rem 0.5rem', fontSize: '0.8rem', color: 'var(--tron-cyan)' }}>OPTIMAL</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdFlow;
