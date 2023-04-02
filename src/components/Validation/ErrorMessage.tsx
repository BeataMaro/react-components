import { Component } from 'react';

import './ErrorMessage.css';

interface ValidationProps {
  error: string | null;
}

export class ErrorMessage extends Component<ValidationProps> {
  render = () => {
    const error = this.props.error;

    return (
      <p className="error" style={error ? { display: 'block' } : { display: 'none' }}>
        {error}
      </p>
    );
  };
}
