import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Compass, ShieldAlert, Settings } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Sentinel Dashboard' },
    { path: '/crowd-flow', icon: <Users size={20} />, label: 'Choreography' },
    { path: '/guidance', icon: <Compass size={20} />, label: 'Holographic Guidance' },
  ];

  return (
    <aside className="glass-panel" style={{ width: '280px', height: 'calc(100vh - 2rem)', margin: '1rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 className="glow-text text-cyan" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '4px' }}>PROJECT NEXUS</h1>
        <p className="text-mono" style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '0.5rem' }}>EVENT ECOSYSTEM v2.6</p>
      </div>
      
      <nav style={{ flexGrow: 1, padding: '1rem' }}>
        {navItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              color: isActive ? 'var(--tron-cyan)' : 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              borderRadius: '8px',
              marginBottom: '0.5rem',
              background: isActive ? 'var(--tron-cyan-dim)' : 'transparent',
              border: isActive ? '1px solid var(--tron-cyan-glow)' : '1px solid transparent',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-mono)'
            })}
          >
            {item.icon}
            <span style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>{item.label.toUpperCase()}</span>
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: '1.5rem', borderTop: '1px solid var(--tron-cyan-dim)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--tron-alert)', marginBottom: '1rem' }}>
          <ShieldAlert size={18} />
          <span className="text-mono" style={{ fontSize: '0.8rem' }}>SYSTEM CRITICAL: 0</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.5 }}>
          <Settings size={18} cursor="pointer" />
          <span className="text-mono" style={{ fontSize: '0.7rem' }}>SECURE LINK ESTABLISHED</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
