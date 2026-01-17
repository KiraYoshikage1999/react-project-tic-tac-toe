import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log the error — keep console logging so developer can see details
    // In production you might send this to an external logging service
    // but here we just keep it local.
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback if provided, otherwise render nothing
      const Fallback = this.props.fallback;
      return Fallback ? Fallback : null;
    }
    return this.props.children;
  }
}
