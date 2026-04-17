import React from 'react';
import { Compass, Cpu, Globe, Zap } from 'lucide-react';

const Guidance = () => {
  return (
    <div className="guidance-container">
      <header style={{ marginBottom: '2rem' }}>
        <h2 className="text-mono text-cyan glow-text" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>SYSTEM: HOLOGRAPHIC_GUIDANCE_v1.2</h2>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '0.5rem' }}>Immersive Pathfinding</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        {[
          { icon: <Compass />, title: 'AR_NAVIGATION', status: 'SYNCHRONIZED' },
          { icon: <Globe />, title: 'HOLOGRAPH_NODES', status: 'ACTIVE' },
          { icon: <Cpu />, title: 'PREDICTIVE_LOAD', status: 'STABLE' },
        ].map((item, i) => (
          <div key={i} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ color: 'var(--tron-cyan)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              {React.cloneElement(item.icon, { size: 32 })}
            </div>
            <h3 className="text-mono" style={{ fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>{item.title}</h3>
            <p className="text-mono text-cyan" style={{ fontSize: '0.7rem' }}>{item.status}</p>
          </div>
        ))}
      </div>

      <div className="glass-panel" style={{ padding: '3rem', position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ 
          position: 'absolute', 
          width: '300px', 
          height: '300px', 
          border: '2px dashed var(--tron-cyan-dim)', 
          borderRadius: '50%',
          animation: 'spin 20s linear infinite'
        }}></div>
        <div style={{ 
          position: 'absolute', 
          width: '200px', 
          height: '200px', 
          border: '1px solid var(--tron-cyan)', 
          borderRadius: '50%',
          boxShadow: '0 0 30px var(--tron-cyan-glow)'
        }}></div>
        
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <Zap size={48} color="var(--tron-cyan)" style={{ marginBottom: '1rem' }} />
          <h3 className="glow-text" style={{ fontSize: '1.5rem', fontWeight: 600 }}>NEURAL_MAP_LINK</h3>
          <p className="text-mono" style={{ opacity: 0.6, fontSize: '0.8rem', marginTop: '1rem' }}>ESTABLISHING_VISUAL_OVERLAY_CONNECTION...</p>
        </div>

        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Guidance;
