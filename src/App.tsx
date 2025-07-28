import './App.css'
import { Sidebar } from './components/Sidebar'
import { mockNavigationData } from './data/mockNavigation'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Inter, -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, Ubuntu, sans-serif'
    }}>
      {/* Header placeholder */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e5e5e5',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        fontSize: '18px',
        fontWeight: '600',
        color: '#333'
      }}>
        Component Library Demo
      </div>

      {/* Sidebar */}
      <Sidebar navigationData={mockNavigationData} />

      {/* Main content area */}
      <div style={{
        marginLeft: '250px',
        marginTop: '64px',
        padding: '2rem',
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          marginBottom: '1rem',
          color: '#333'
        }}>
          Pine Design System Component Library
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#666', 
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          This is a demonstration of our custom component library that converts Pine Design System 
          web components to React components. The sidebar on the left shows our Sidebar component 
          with interactive accordion sections and navigation items.
        </p>
        
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
            Features Implemented
          </h2>
          <ul style={{ lineHeight: '1.8', color: '#555' }}>
            <li>✅ Converted Pine DS components to React equivalents</li>
            <li>✅ Interactive accordion sections with smooth animations</li>
            <li>✅ Proper TypeScript interfaces and type safety</li>
            <li>✅ Centralized state management with custom hooks</li>
            <li>✅ Reusable component architecture</li>
            <li>✅ Mock data structure for easy testing</li>
            <li>✅ Responsive design with proper spacing</li>
            <li>✅ Hover states and micro-interactions</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
            Component Mapping
          </h2>
          <div style={{ display: 'grid', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
            <div><code>pds-link</code> → <code>Link</code> component</div>
            <div><code>pds-icon</code> → <code>Icon</code> component</div>
            <div><code>pds-box</code> → <code>Box</code> component</div>
            <div><code>pds-accordion</code> → <code>SidebarAccordion</code> component</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App