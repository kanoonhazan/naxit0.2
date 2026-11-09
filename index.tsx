
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };
  declare props: ErrorBoundaryProps;

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Critical Runtime Error caught by RootErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#ff4d4f', fontFamily: 'monospace', background: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px', color: '#00d4ff' }}>NAXIT - Application Encountered an Error</h1>
          <p style={{ color: '#fff', marginBottom: '20px' }}>{this.state.error?.message}</p>
          <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', maxWidth: '800px', overflowX: 'auto', color: '#aaa', fontSize: '12px' }}>
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => { sessionStorage.clear(); window.location.reload(); }}
            style={{ marginTop: '20px', padding: '10px 24px', background: '#0055ff', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Clear Cache & Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
