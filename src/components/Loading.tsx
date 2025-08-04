import React from 'react';
import { Loader2 } from 'lucide-react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <Loader2 className="loading-spinner" size={48} />
        <h2>Loading...</h2>
        <p>Please wait while we prepare your content</p>
      </div>
    </div>
  );
};

export default Loading;
